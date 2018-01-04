import React from 'react';
import PropTypes from 'prop-types';



const Card = ({name, founded, coat, words, seats, titles, weapons}) => {
 
const titleMap = (titles) => {
  let mapTitle = titles.map((title => {
    
    return (
      <p> Title: {title} </p>
      )
  }))
  return mapTitle
}



  return (

    <div className = "card">
    <p> Name: {name} </p>
    <p> Founded: {founded} </p>
    <p> Coat: {coat} </p>
    <p> Words: {words} </p>
    <p> Seats: {seats} </p>
    <p> {titleMap(titles)} </p>
    <p> Weapons: {weapons} </p>
    <p> Words: {words} </p>
    </div>
  )
}

export default Card;