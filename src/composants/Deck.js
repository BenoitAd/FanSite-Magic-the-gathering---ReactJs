import Card from './Card';
import '../App.css';
import '../Loading.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Deck(props) {
    const navigate = useNavigate();
    const { filters } = useParams();

    const urlCards = `https://api.magicthegathering.io/v1/cards/?${filters}`;

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

                <button
                    type="button"
                    className="button_deck_top"
                    onClick={() => navigate(`/`)}
                >
                    Go back to filters
                </button>

                <ul className="deck">
                    {deck.map((card) => (
                        <Card
                            name={card.name}
                            manaCost={card.manaCost}
                            url={card.imageUrl}
                            text={card.originalText}
                            id={card.id}
                            filters={filters}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default Deck;
