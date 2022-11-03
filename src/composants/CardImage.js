import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function CardImage(props) {

    const { id } = useParams();

    const urlCard = `https://api.magicthegathering.io/v1/cards/${id}`

    const [card, setCard] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(urlCard);
        return data;
    };

    useEffect(() => {
        getData().then((data) => {
            setCard(data.card)
        });
    }, []);

    if(card.length != 0){
        return (
            <div>
            <img src={card.imageUrl} alt={card.name} />
            </div>
            );
    }
}

export default CardImage;
