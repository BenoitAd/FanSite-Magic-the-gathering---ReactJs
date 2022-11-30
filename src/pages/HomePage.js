import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    return(
    <div >
    <h1 className='pageTitle'>Magic Fan Site</h1>
    <div className='div'>
        <button className='buttonAcceuil' onClick={() => navigate(`/MyForm`)}>Find your card by filter</button>
        <button className='buttonAcceuil' onClick={() => navigate(`/Information`)}>About page</button>
    </div>
    </div>)
}

export default HomePage;
