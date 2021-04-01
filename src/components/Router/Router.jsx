import React from 'react'
import Home from '../Home/Home';
import CustomerPage from '../CustomerPage/CustomerPage';
import Checkout from '../Checkout/Checkout';
import AdminOrders from '../AdminOrders/AdminOrders';
import { HashRouter, Route } from 'react-router-dom';


const Router = () => {
    return (
    <div>
        <HashRouter>

            <Route path = '/' exact>
                <Home />
            </Route>  

            <Route path = '/customer' exact>
                <CustomerPage />
            </Route>

            <Route path = '/checkout' exact>
                <Checkout />
            </Route>

            <Route path = '/adminOrders' exact>
                <AdminOrders />
            </Route>

        </HashRouter>
    </div>
    )
}

export default Router;
