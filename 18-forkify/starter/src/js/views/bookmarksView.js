import View from "./view";
import previewView from "./previewView";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View{
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = "Could not find the bookmarks!"
    _successMessage = ""

    addHandlerrender(handler) {
        window.addEventListener('load', ()=>{
            handler();
        })
    }

    _generateMarkup() {
        return this._data.map(res => previewView.render(res, false)).join(' ')
    }
}

export default new BookmarksView();