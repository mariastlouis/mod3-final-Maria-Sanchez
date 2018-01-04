import React from 'react';
import PropTypes from 'prop-types';



const Card = ({name, founded, coat, words, seats}) => {
  console.log(name)
  return (
    <div className = "card">
    <p> {name} </p>
    <p> {founded} </p>
    <p> {coat} </p>
    <p> {words} </p>
    <p> {seats} </p>
    </div>
  )
}

export default Card;