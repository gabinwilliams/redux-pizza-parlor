import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import Router from '../Router/Router';




function App() {
useEffect(() => { getPizzas() }, [])

//use dispatch
const dispatch = useDispatch();

let getPizzas = () =>{
  axios.get('/api/pizza').then((response)=>{
    console.log('back from GET:', response.data);
    dispatch( { type: 'setPizzaMenu', payload: response.data } )
  }).catch((err)=>{
    console.log(err);
    alert('error with GET');
  })
} 

  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
