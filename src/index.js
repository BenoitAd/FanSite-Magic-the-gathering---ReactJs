import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialstate = [];

const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
const REMOVE_CARD_TO_DECK = 'REMOVE_CARD_TO_DECK';

function addCardToDeck(state = initialstate, action, card) {
    switch (action.type) {
        case ADD_CARD_TO_DECK:
            return [...state, ...action.payload];
        case REMOVE_CARD_TO_DECK:
            let array = state;
            array.remove(card);
            return array;
        default:
            return state;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
