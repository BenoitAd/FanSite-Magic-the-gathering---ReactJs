import Card from '../composants/Card';
import React from 'react';
import { useSelector } from 'react-redux';

function CardsList() {
    
    const cards = useSelector((state) => state.UserDeck);

    if (cards.length === 0) {
        return (
            <>
                <h1 className="pageTitle"> Your Deck is Empty ! </h1>
            </>
        );
    } else {
        return (
            <>
                    <ul className="deck">
                        {cards.map((card, myKey) => (
                            <React.Fragment key={myKey}>
                                <Card
                                    name={card.name}
                                    manaCost={card.manaCost}
                                    url={card.url}
                                    text={card.text}
                                    id={card.id}
                                    isChecked={card.isChecked}
                                />
                            </React.Fragment>
                        ))}
                    </ul>
            </>
        );
    }
}

export default CardsList;
