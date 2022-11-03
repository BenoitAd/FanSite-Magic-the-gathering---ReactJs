import './App.css';
import Deck from './composants/Deck';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardImage from './composants/CardImage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Deck />} />
          <Route path='/cardImage/:id' element={<CardImage />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
