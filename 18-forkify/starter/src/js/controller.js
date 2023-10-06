import * as model from './model'
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';

import "core-js/stable";
import "regenerator-runtime/runtime"
import paginationView from './views/paginationView';
import { MODAL_CLOSE_SEC } from './config';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function(){
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;

    recipeView.renderSpinner(recipeContainer)

    resultsView.update(model.getSearchResultsPage())


    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
    bookmarksView.update(model.state.bookmarks);
  }
  catch(err){
    recipeView.renderError()
  }
}

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();

    if(!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultsPage())

    paginationView.render(model.state.search)
  } catch(err) {
    console.error(err)
  }
}

const controlPagination = function(goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage))
  paginationView.render(model.state.search)
}

const controlServings = function(newServings) {
  model.updateServings(newServings);
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);

}

const controlAddBookmark = function() {

  if (model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id);
  } else {
    model.addBookmark(model.state.recipe);
  }

  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);

}

const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function(newRecipe) {
  try{
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);

    addRecipeView.renderMessage();

    bookmarksView.render(model.state.bookmarks)

    window.history.pushState(null, '', `#${model.state.recipe.id}`)
    
    setTimeout(function(){
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC)

  } catch(err) {
    console.error(err);
    addRecipeView.renderError(err);

  }
}

const init = function(){
  bookmarksView.addHandlerrender(controlBookmarks);
  recipeView.addHandelerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}

init();



