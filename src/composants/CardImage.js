import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../Loading.css';

function CardImage(props) {
    const navigate = useNavigate();

    const { id } = useParams();

    const filter = id.split('+')[1];

    const imageId = id.split('+')[0];

    const urlCard = `https://api.magicthegathering.io/v1/cards/${imageId}`;

    const [card, setCard] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(urlCard);
        return data;
    };

    useEffect(() => {
        getData().then((data) => {
            setCard(data.card);
        });
    });

    if (card.length === 0) {
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
            <div>
                <img className="artWork" src={card.imageUrl} alt={card.name} />
                <button
                    className="button2"
                    onClick={() => navigate(`/Deck/${filter}`)}
                >
                    Go Back to Deck
                </button>
            </div>
        );
    }
}

export default CardImage;
