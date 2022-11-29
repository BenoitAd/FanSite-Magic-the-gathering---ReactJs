import { useSelector } from 'react-redux';
import CardsList from '../composants/CardsList';
import Navbar from '../composants/Navbar';

export default function UserDeck() {
    const cards = useSelector((state) => state.UserDeck);

    return (
            <div className="navbar-container">
            <Navbar />
                <h1 className='pageTitle'> Number of Card in your Deck : {cards.length}</h1>
                <CardsList />
            </div>
    );


}
