import './App.css';
import './Loading.css'
import Deck from './pages/Deck';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardImage from './composants/CardImage';
import Menu from './pages/HomePage';
import MyForm from './pages/MyForm';
import Information from './pages/Information'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/Information" element={<Information />} />
                <Route path="/MyForm" element={<MyForm />}></Route>
                <Route path="/Deck/:filters" element={<Deck />} />
                <Route path="/cardImage/:id" element={<CardImage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
