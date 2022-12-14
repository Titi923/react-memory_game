import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/img/feather-1.png"},
  { "src": "/img/magicstone-1.png"},
  { "src": "/img/potion-1.png"},
  { "src": "/img/ravenskull-1.png"},
  { "src": "/img/tigerskull-1.png"},
  { "src": "/img/wizardhat-1.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  
  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random }) )

    setCards(shuffledCards);
    setTurns(0);
  }
   
  return (
    <div className="App">
      <h1>Magic Cards Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;