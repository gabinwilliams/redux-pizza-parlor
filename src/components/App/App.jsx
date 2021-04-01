import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';



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
      <Header />
    </div>
  );
}

export default App;
