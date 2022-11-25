import { useNavigate } from 'react-router-dom';

function Menu(){
    const navigate = useNavigate();
    return(
    <div >
    <h1 className='pageTitle'>Magic Fan Club</h1>
    <div className='div'>
        <button className='buttonAcceuil' onClick={() => navigate(`/MyForm`)}>Find your card by filter</button>
        <button className='buttonAcceuil' onClick={() => navigate(`/Information`)}>A propos</button>
    </div>
    </div>)
}

export default Menu