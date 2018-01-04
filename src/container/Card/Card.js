import React from 'react';
import PropTypes from 'prop-types';



const Card = ({name, founded, coat, words, seats, titles, weapons}) => {
 
const titleMap = (titles) => {
  const titleKeys = Object.keys(titles).map((title) => {
    debugger;
    
  })

}



  return (

    <div className = "card">
    <p> name: {name} </p>
    <p> founded: {founded} </p>
    <p> coate: {coat} </p>
    <p> words: {words} </p>
    <p> seats: {seats} </p>
    <p> titles: {titles} </p>
    <p> weapons: {weapons} </p>
    <p> words: {words} </p>
    </div>
  )
}

export default Card;