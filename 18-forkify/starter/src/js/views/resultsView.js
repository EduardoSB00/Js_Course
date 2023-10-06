import View from "./view";
import previewView from "./previewView";
import icons from "url:../../img/icons.svg";

class ResultsView extends View{
    _parentElement = document.querySelector('.results');
    _errorMessage = "Could not find the recipe!"
    _successMessage = ""

    _generateMarkup() {
        return this._data.map(res => previewView.render(res, false)).join(' ')
    }

}

export default new ResultsView();