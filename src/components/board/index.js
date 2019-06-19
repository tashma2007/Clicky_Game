import React from 'react'
import PropTypes from 'prop-types'

import Card from ' ../card'

export default function Board({ cards, handleClick }) {
    return (
        <div className='board'>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    width={100}
                    height={100}
                    handleClick={() => handleClick(card.id)}
                />
            ))}
        </div>
    )
}


Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).nameisRequired,
    handleClick: PropTypes.func.isRequired,
}