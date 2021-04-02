import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

const CustomerForm = () => {
    //setup for dispatch
    const dispatch = useDispatch();

    const [ tempCustomer, setTempCustomer ] = useState( {customer_name: '', street_address: '', city: '', zip: '', type: ''} ) 

    const handleName = (event) =>{
        setTempCustomer( { ...tempCustomer, customer_name: event.target.value } );
    }

    const handleAddress = (event) => {
        setTempCustomer({...tempCustomer, street_address: event.target.value});
    }

    const handleCity = (event) =>{
        setTempCustomer( { ...tempCustomer, city: event.target.value } );
    }

    const handleZip = (event) =>{
        setTempCustomer( {...tempCustomer, zip: event.target.value} );
    }
    
    const handleType = (event) =>{
        setTempCustomer( {...tempCustomer, type: event.target.value} );
    }


    const handleSubmit = ( object ) => {
        dispatch( { type: 'tempCustomer', payload: object } )
    }

    
    return (
    <>
            <input type="text" placeholder="Name" onChange={handleName}/>
            <input type="text" placeholder="Street Address" onChange={handleAddress}/>
            <input type="text" placeholder="City" onChange={handleCity}/>
            <input type="text" placeholder="Zip" onChange={handleZip}/>    
            <p>How You Get It To You?</p> 

            <input type="radio" id="pickup" name="type" value="pickup" onChange={handleType}></input>
            <label>Pick-up</label>
            <input type="radio" id="delivery" name="type" value="delivery" onChange={handleType}></input>
            <label>Delivery</label>
            
            <Link to = '/checkout'>
                <button onClick={() => handleSubmit( tempCustomer )}>Next</button>
            </Link>
    </>
    )
}

export default CustomerForm
