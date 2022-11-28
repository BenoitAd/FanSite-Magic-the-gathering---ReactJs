import Card from '../composants/Card';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from '../composants/Navbar';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store/Redux'

function CardsList() {

    const navigate = useNavigate();
    <Provider store={store}>
    const cards = useSelector((state) => state.);

    if (cards.length === 0) {
        return (
            <>
                <button
                    type="button"
                    className="button_deck_top"
                    onClick={() => navigate(`/MyForm`)}
                >
                    Go back to filters
                </button>
                <h1 className="pageTitle"> Your Deck is Empty ! </h1>
            </>
        );
    } else {
        return (
            <>
                <div className="navbar-container">
                    <Navbar />
                    <h1 className="pageTitle">Your Deck : </h1>
                    <ul className="deck">
                        {cards.map((card, myKey) => (
                            <React.Fragment key={myKey}>
                                <Card
                                    addCard={props.addCard}
                                    removeCard={props.removeCard}
                                    name={card.name}
                                    manaCost={card.manaCost}
                                    url={card.imageUrl}
                                    text={card.originalText}
                                    id={card.id}
                                />
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
    </Provider>
}

export default CardsList;
