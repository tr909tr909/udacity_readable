import React from 'react';
import ReactDOM from 'react-dom';
import './styles/materialize/css/materialize.css'
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

let store = createStoreWithMiddleware(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);


registerServiceWorker();
