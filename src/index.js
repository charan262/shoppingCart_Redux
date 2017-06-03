import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';
import App from './components/App';
const store=createStore(allReducers);
console.log(store.getState())
ReactDOM.render(<Provider store={store} >
                  <App/>
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();
