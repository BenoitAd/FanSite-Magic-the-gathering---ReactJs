import Card from './Card';
import '../App.css';
import '../Loading.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Deck(props) {

    const urlCards = 'https://api.magicthegathering.io/v1/cards?supertypes=Legendary';

    const [deck, setDeck] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(urlCards);
        return data;
    };

    useEffect(() => {
        getData().then((data) => {
            setDeck(
                data.cards.filter((card) => {
                    return !(
                        card.name === undefined ||
                        card.manaCost === undefined ||
                        card.imageUrl === undefined ||
                        card.originalText === undefined ||
                        card.id === undefined
                    );
                })
            );
        });
    }, []);

    if (deck.length === 0) {
        return (
            <div class="center">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        );
    } else {
        return (
            <>
                <h1 className="pageTitle">Your Deck : </h1>
                <ul className="deck">
                    {deck.map((card) => (
                        <Card
                            name={card.name}
                            manaCost={card.manaCost}
                            url={card.imageUrl}
                            text={card.originalText}
                            id={card.id}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default Deck;
