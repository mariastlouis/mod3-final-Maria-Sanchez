import React from 'react';
import PropTypes from 'prop-types';
import '../../components/App/App.css';


const Card = ({name, founded, coat, words, seats, titles, weapons}) => {
 
const titleMap = (titles) => {
  let mapTitle = titles.map((title => {
    return (
      <p> Titles: {title} </p>
      )
  }))
  return mapTitle
};

const foundedStyle = founded => {
  return founded ? founded : 'N/A'
};


  return (

    <div className = "card">
      <h1>{name} </h1>
      <h2>{words}</h2>
      <p> Founded: {foundedStyle(founded)} </p>
      <p> Seats: {seats} </p>
      <p> {titleMap(titles)} </p>
      <p> Ancestral Weapons: {weapons} </p>
      <p> Coat: {coat} </p>
    
    </div>
  );
};

export default Card;