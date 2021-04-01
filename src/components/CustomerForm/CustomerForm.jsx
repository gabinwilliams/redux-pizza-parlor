import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const CustomerForm = () => {
    //setup for dispatch
    const dispatch = useDispatch();
    // const [nameIn, setNameIn] = useState('');
    // const [addressIn, setAddressIn] = useState('');
    // const [cityIn, setCityIn] = useState('');
    // const [zipIn, setZipIn] = useState('');
    // const [deliveryIn, setDeliveryIn] = useState('');

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
        {/* <form onSubmit={() => handleSubmit }> */}
            <input type="text" placeholder="Name" onChange={handleName}/>
            <input type="text" placeholder="Street Address" onChange={handleAddress}/>
            <input type="text" placeholder="City" onChange={handleCity}/>
            <input type="text" placeholder="Zip" onChange={handleZip}/>    
            <p>How You Get It To You?</p> 
            <input type="radio" id="pickup" name="type" value="pickup" onChange={handleType}></input>
            <label>Pick-up</label>
            <input type="radio" id="delivery" name="type" value="delivery" onChange={handleType}></input>
            <label>Delivery</label>
            <button onClick={() => handleSubmit( tempCustomer )}>Next</button>
        {/* </form> */}
    </>
    )
}

export default CustomerForm
