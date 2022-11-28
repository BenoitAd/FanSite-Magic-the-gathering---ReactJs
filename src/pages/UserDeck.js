import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import CardsList from '../composants/CardsList';

export default function UserDeck() {
    return (
        <Provider>
            const cards = useSelector((state) => state.UserDeck);
            <div>
                <h1> Nombre de cartes : ${cards.length}</h1>
                <CardsList />
            </div>
        </Provider>
    );
}
