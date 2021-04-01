import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Router, Rout } from 'react-router-dom';
import PizzaItem from '../PizzaItem/PizzaItem';


const PizzaList = () => {
    const pizzaList = useSelector( store => {
        return store.pizzaMenu;
    })
    return (
        <>
            {/* <p>{JSON.stringify(pizzaList)}</p> */}
            {pizzaList.map( (pizza) =>  <PizzaItem pizza = { pizza } key = {pizza.id} /> )}
            <Link to = '/customer'>
                <button>Next</button>
            </Link>
        </>
    )
}

export default PizzaList

