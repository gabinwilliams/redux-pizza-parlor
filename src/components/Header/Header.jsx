import { useSelector } from 'react-redux';

function Header(){
    const totalCost = useSelector( store => {
        return store.totalCost;
    })

    return(
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <p>Cost: {totalCost}</p>
            </header>
        </>
    )
    
}

export default Header;