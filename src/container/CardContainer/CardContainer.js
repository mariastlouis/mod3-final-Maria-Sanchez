import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import '../../components/App/App.css'



export const CardContainer = (props) => {
  
  const cardMap = (props) => {
    if (props.houses.data) {
      const houseData = props.houses.data;

      const houseKeys = Object.keys(houseData).map((house, index) => {
       
        return (
          <Card 
            key = {index}
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
     
      {
        props.houses.data.length > 0 &&
        cardMap(props)
      }
      
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    houses: store.houses
  }
}

CardContainer.propTypes = {
  props: PropTypes.array
}

export default connect(mapStateToProps, null)(CardContainer);