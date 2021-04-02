import React from 'react'
import { useSelector } from 'react-redux';

const CheckoutStatus = () => {
    const customerInformation = useSelector( store => {
        return store.tempCustomer;
    })

    return (
    <section>
        <h2>Step 3: Checkout</h2>
        <p>{customerInformation.customer_name}</p>
        <p>{customerInformation.street_address}</p>
        <p>{customerInformation.city}</p>
        <p>{customerInformation.type}</p>
    </section>
    )
}

export default CheckoutStatus
