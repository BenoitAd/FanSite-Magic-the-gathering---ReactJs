import { useSelector } from 'react-redux';
import CardsList from '../composants/CardsList';
import { useNavigate } from 'react-router-dom';

export default function UserDeck() {
    const cards = useSelector((state) => state.UserDeck);
    const navigate = useNavigate();

    return (
            <div>
                <button
                    type="button"
                    className="button_deck_top"
                    onClick={() => navigate(`/Deck`)}
                >
                    Go back to filters result page
                </button>
                <h1 className='pageTitle'> Number of Card in your Deck : {cards.length}</h1>
                <CardsList />
                
            </div>
    );


}
