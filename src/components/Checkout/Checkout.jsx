import React from 'react'
import CheckoutStatus from '../CheckoutStatus/CheckoutStatus';
import CheckoutOrderTable from '../CheckoutOrderTable/CheckoutOrderTable';

const Checkout = () => {
  return (
    <>
      <header>
        <h1>Prime Pizza</h1>
      </header>
        <CheckoutStatus />
        <CheckoutOrderTable />
      <button>Checkout</button>
    </>
  )
}

export default Checkout
