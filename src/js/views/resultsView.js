import View from './view.js';
import PreviewView from './previewView.js';

class ResultsView extends View {
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _parentElement = document.querySelector('.results');
  _message = '';

  _generateMarkup() {
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new ResultsView();
