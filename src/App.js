import React, { useState, useEffect } from 'react';
import Board from './components/board'
import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  const handleClick = (id) => setFlipped([... flipped, id])
  
  return (
    <div>
      <p>Click on an image to earn points, but don't click on any more than once!</p>
    <Board cards={cards} flipped={flipped} handleClick=
    {handleClick} />

    </div>
  )      
}


