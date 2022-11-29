import './App.css';
import './Loading.css'
import Deck from './pages/Deck';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardImage from './composants/CardImage';
import Menu from './pages/HomePage';
import MyForm from './pages/MyForm';
import Information from './pages/Information'
import { Provider } from 'react-redux';
import { store } from './store/Redux';
import UserDeck from './pages/UserDeck';

function App() {
    return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/Information" element={<Information />} />
                <Route path="/MyForm" element={<MyForm />}></Route>
                <Route path="/Deck/:filters" element={<Deck />} />
                <Route path="/cardImage/:id" element={<CardImage />} />
                <Route path="/userDeck" element={<UserDeck />} />
            </Routes>
        </BrowserRouter>
    </Provider>
    );
}

export default App;
