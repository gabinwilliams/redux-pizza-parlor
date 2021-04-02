import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

//reducers go here, ya herd Perd?
const totalCost = (state = 0, action) => {

    return state;    
}

const pizzaMenu = (state = [], action) => {

    if(action.type === 'setPizzaMenu') {

        state = action.payload;
    }

    
    return state;
}

const tempOrder = (state = [], action) => {

    if (action.type === 'tempOrder'){
        state = action.payload;
    }
    console.log('temp order', tempOrder);
    return state;
}

const tempCart = ( state =[], action) => {
    if( action.type === 'addCart' ) {
        state = [...state, action.payload];
    }
    if( action.type === 'removeCart' ) {
        state = [...state.slice(0, state.indexOf(action.payload)), ...state.slice(state.indexOf(action.payload) + 1)];
    }
    return state;
}

const tempCustomer = (state = {}, action) => {

    // if (action.type === 'tempOrder'){
    //     state = {...state, pizzas: action.payload }
    // }

    if(action.type === 'tempCustomer') {
        state = {
            ...state,
            customer_name: action.payload.customer_name, 
            street_address: action.payload.street_address, 
            city: action.payload.city, 
            zip: action.payload.zip, 
            type: action.payload.type
        } //payload needs to be split up into properties action.payload};
       
    } 
    console.log( 'state object:', state )
    return state;
};



const store = createStore(
    combineReducers({
        totalCost: totalCost,
        pizzaMenu: pizzaMenu,
        tempCustomer: tempCustomer,
        tempOrder: tempOrder,
        tempCart: tempCart
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider>, document.getElementById('root'));
