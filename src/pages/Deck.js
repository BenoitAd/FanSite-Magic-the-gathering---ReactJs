import Card from '../composants/Card';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Navbar from '../composants/Navbar';

function Deck(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const filters = useSelector((state) => state.filters)[0];

    let urlCards = `https://api.magicthegathering.io/v1/cards/${filters}`;
    console.log(urlCards);

    const [deck, setDeck] = useState([]);

    const getData = async () => {
        let attempts = 0;
        const maxAttempts = 5;
        let data;

        while (attempts < maxAttempts) {
            try {
                const response = await axios.get(urlCards);
                data = response.data;
                break; // si la requête a fonctionné, on sort de la boucle
            } catch (error) {
                console.log(`Attempt ${attempts + 1} failed. Retrying...`);
                // attendre 1 seconde avant de réessayer
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }

            attempts++;
        }

        if (attempts === maxAttempts) {
            throw new Error(`Failed to get data after ${maxAttempts} attempts`);
        }

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
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        );
    } else if (deck.length > 0 && !loading) {
        return (
            <>
                <div className="navbar-container">
                    <Navbar />
                    <h1 className="pageTitle">Filter Result : </h1>

                    <ul className="deck">
                        {deck.map((card, myKey) => (
                            <React.Fragment key={myKey}>
                                <Card
                                    name={card.name}
                                    manaCost={card.manaCost}
                                    url={card.imageUrl}
                                    text={card.originalText}
                                    id={card.id}
                                    isChecked={false}
                                />
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
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
                <h1 className="pageTitle">
                    {' '}
                    This filters doesn't have any match in the database{' '}
                </h1>
            </>
        );
    }
}

export default Deck;
