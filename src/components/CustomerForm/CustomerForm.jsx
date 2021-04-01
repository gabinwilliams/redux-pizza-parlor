import {useState} from 'react';
import {useSelector} from 'react-redux';

const CustomerForm = () => {

    const [nameIn, setNameIn] = useState('');
    const [addressIn, setAddressIn] = useState('');
    const [cityIn, setCityIn] = useState('');
    const [zipIn, setZipIn] = useState('');
    const [deliveryIn, setDeliveryIn] = useState('');

    

    return (
    <>
        <form onSubmit="">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Street Address"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="Zip"/>     
            <input type="radio" id="pickup" name="type" value="pickup"></input>
            <label for="pickup">Pick-up</label>
            <input type="radio" id="delivery" name="type" value="delivery"></input>
            <label for="delivery">Delivery</label>
            <button type = 'submit'>Next</button>
        </form>
    </>
    )
}

export default CustomerForm
