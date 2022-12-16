import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import './components/SingleCard.js';
import SingleCard from './components/SingleCard.js';

const cardImages = [
  { src: '/img/feather-1.png', matched: false },
  { src: '/img/magicstone-1.png', matched: false },
  { src: '/img/potion-1.png', matched: false },
  { src: '/img/ravenskull-1.png', matched: false },
  { src: '/img/tigerskull-1.png', matched: false },
  { src: '/img/wizardhat-1.png', matched: false },
];

function App() {
  // variables
  const numberOfTurns = 0;

  // useStates
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(numberOfTurns);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random }));

    setCards(shuffledCards);
    setTurns(numberOfTurns);
  };

  // handle card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected card
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h2>Turns: {turns}</h2>
      <h1>Magic Cards Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            propCard={card}
            propHandleChoice={handleChoice}
            propFlipped={
              card === choiceOne || card === choiceTwo || card.matched
            }
            propDisabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
