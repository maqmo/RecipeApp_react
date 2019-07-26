import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeApp from './Components/RecipeApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RecipeApp />, document.getElementById('root'));
serviceWorker.unregister();
