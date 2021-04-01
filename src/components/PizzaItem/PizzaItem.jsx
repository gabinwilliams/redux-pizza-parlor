// import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const PizzaItem = ( { pizza } ) => {

    const dispatch = useDispatch()

    const sendToOrder = ( pizza ) =>{
        //dispatch to redux/reducer to ADD to order
    }

    const deleteFromOrder = ( pizza ) =>{
        //dispatch to redux/reducer to REMOVE from order
    }

    //CONDITIONAL RENDER FOR ADD/REMOVE BUTTONS
    //Toggle function
    //Render function
    // -sendToOrder should happen when "Add" button is rendered



    return (
        <div>
            <h2>{pizza.name}</h2> 
            <img src={pizza.image_path} />
            <p>{pizza.description} {pizza.price}</p>
            <button>Add/remove</button>
        </div>
    )
}

export default PizzaItem;
