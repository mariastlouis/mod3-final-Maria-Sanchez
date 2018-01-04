import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { connect } from 'react-redux';




export const CardContainer = (props) => {
  
  const cardMap = (props) => {
    if (props.houses.data) {
      const houseData = props.houses.data;

      const houseKeys = Object.keys(houseData).map((house) => {
       
        return (
          <Card 
            name = {houseData[house].name}
            founded = {houseData[house].founded}
            coat = {houseData[house].coat}
            words = {houseData[house].words}
            seats = {houseData[house].seats}
            titles= {houseData[house].titles}
            weapons = {houseData[house].weapons}
            words = {houseData[house].words} 

            />
        )
      })
    
    return houseKeys
    }
  }


  return (
    <div className = "card-container">
      <p> Card container hooked up </p>
      {cardMap(props)}

    </div>
  );
};

export const mapStateToProps = store => {
  return {
    houses: store.houses
  }
}

export default connect(mapStateToProps, null)(CardContainer);