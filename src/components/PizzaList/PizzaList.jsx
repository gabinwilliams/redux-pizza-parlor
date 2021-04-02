import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Router, Rout } from 'react-router-dom';
import PizzaItem from '../PizzaItem/PizzaItem';
import {useState} from 'react';
import { useDispatch } from 'react-redux';



const PizzaList = () => {
    const dispatch = useDispatch();

    const pizzaList = useSelector( store => {
        return store.pizzaMenu;
    })

    const [tempCart, setTempCart] = useState([]);

    const sendCartToRedux = () =>{
        console.log( 'inSendCartToRedux( ')
        dispatch({ type: 'tempOrder', payload: tempCart })
    }

    return (
        <>
            {/* <p>{JSON.stringify(pizzaList)}</p> */}
            {pizzaList.map( (pizza) =>  <PizzaItem tempCart = {tempCart} setTempCart = {setTempCart} pizza = { pizza } key = {pizza.id} /> )}
            <Link to = '/customer'>
                <button onClick={() => sendCartToRedux()}>Next</button>
            </Link>
        </>
    )
}

export default PizzaList

