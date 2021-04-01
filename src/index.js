import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

//reducers go here
const totalCost = (state = 0, action) => {

    return state;    
}

const pizzaMenu = (state = [], action) => {

    if(action.type === 'setPizzaMenu') {

        state = action.payload;
    }
    
    return state;
}


const store = createStore(
    combineReducers({
        totalCost: totalCost,
        pizzaMenu: pizzaMenu,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider>, document.getElementById('root'));
