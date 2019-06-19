import React from 'react';
import PropTypes from 'prop-types'

import './styles.css';

export default function Card({
    handleClick,
    id,
    //type,
    height,
    width
}) {
    return (
        <div
            className="clicked"
            style={{
                width,
                height
            }}
            onClick={() => handleClick(id)}
        >
            <div className="clicked">
                <img
                    style={{
                        height,
                        width
                    }}
                
                />
            </div>
       </div>
    )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}
