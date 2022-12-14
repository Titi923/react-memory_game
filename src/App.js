import { useState } from 'react';
import './App.css';
import "./components/SingleCard.js"
import SingleCard from './components/SingleCard.js';

const cardImages = [
  { "src": "/img/feather-1.png"},
  { "src": "/img/magicstone-1.png"},
  { "src": "/img/potion-1.png"},
  { "src": "/img/ravenskull-1.png"},
  { "src": "/img/tigerskull-1.png"},
  { "src": "/img/wizardhat-1.png"}
]

function App() {
  // useStates
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  
  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random }) )

    setCards(shuffledCards);
    setTurns(0);
  }

  // handle card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }
   
  return (
    <div className="App">
      <h1>Magic Cards Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            propCard={card} 
            propHandleChoice={handleChoice}
          />
        ))}
      </div>

    </div>
  );
}

export default App;