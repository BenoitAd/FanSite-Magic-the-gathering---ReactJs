import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    return (
        <button className="button3" onClick={() => navigate('/Deck')}>
            Generate your Magic Deck
        </button>
    );
}

export default HomePage;
