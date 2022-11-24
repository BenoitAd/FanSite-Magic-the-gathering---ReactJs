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
    const [loading, setLoading] = useState(true);

    let urlCards = `https://api.magicthegathering.io/v1/cards/?${filters}`;

    const [deck, setDeck] = useState([]);

    const getData = async () => {
        setLoading(true)
        if(filters === "!Filters") urlCards = `https://api.magicthegathering.io/v1/cards`;
        console.log(urlCards)
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
            setLoading(false)
        });
    }, []);

    if (loading) {
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
    } else if (deck.length > 0 && !loading){
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
    } else {
        return (
            <>
        <button
        type="button"
        className="button_deck_top"
        onClick={() => navigate(`/MyForm`)}
    >
        Go back to filters
    </button>
    <h1 className='pageTitle'> This filters doesn't have any match in the database </h1>
    </>)
    }
}

export default Deck;
