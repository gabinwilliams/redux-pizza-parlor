// import {useHistory} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {useState} from 'react';


const PizzaItem = ( { pizza } ) => {

    const dispatch = useDispatch()

    // const sendToOrder = ( pizza ) =>{
    //     //dispatch to redux/reducer to ADD to order
    // }
    
    // const [tempCart, setTempCart] = useState([]);



    //// CONDITIONAL RENDER FOR ADD/REMOVE BUTTONS
    // const [toggleButton, setToggleButton ] = useState(false);
    //Toggle function
    // const toggle = () =>{
    //     setToggleButton( !toggleButton );
    //     console.log( 'TOGGLED!');
    // }
    // //Render function

    // const handleClick = () =>{
    //     let returnString = ''
    //     if ( !toggleButton ){
    //         returnString = <span onClick={() => sendToCart( pizza )}>add</span>
    //     } else{
    //         returnString = <span onClick={() => deleteFromOrder( pizza )}>remove</span>
    //     }
    //     return returnString;
    // }//end 


    // -sendToOrder should happen when "Add" button is clicked
    // const sendToCart = ( pizza ) => { 
    //     setTempCart([ ...tempCart, pizza ]) 
    //     console.log('added to tempCart', tempCart);   
    // }

    //deleteFrom order when 'Remove' is clicked
    // const deleteFromOrder = ( pizza, index ) =>{
    //     console.log('current cart', tempCart, index);
        
    //     if(tempCart.length > 0) {
    //     setTempCart(...tempCart.splice( tempCart.indexOf(index), 1 ) );
    // }
    //     console.log('Removed item from tempCart', tempCart);
    // }
    const [toggle, setToggle] = useState(true);

    const toggleButton = () => {
        setToggle(!toggle);
    }

    const addPizza = () => {
        toggleButton();
        dispatch( { type: 'addCart', payload: pizza })
    }

    const removePizza = () => {
        toggleButton();
        dispatch( { type: 'removeCart', payload: pizza})
    }
    return (
        <div>
            <h2>{pizza.name}</h2> 
            <img src={pizza.image_path} />
            <p>{pizza.description} {pizza.price}</p>
            {toggle ? <button onClick = { () => addPizza() }>Add</button> : <button onClick = { () => removePizza()}>Remove</button>}
            {/* <button onClick={() => sendToCart( pizza )}>Add</button> */}
            {/* <button onClick={() => deleteFromOrder(pizza)}>Remove</button> */}
        </div>
    )
}

export default PizzaItem;
