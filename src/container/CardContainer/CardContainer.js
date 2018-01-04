import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { connect } from 'react-redux';


export const CardContainer = (props) => {
  console.log(props)
  return (
    <div className = "card-container">
      <p> Card container hooked up </p>
      <Card /> 

    </div>
  );
};

export const mapStateToProps = store => {
  return {
    houses: store.houses
  }
}

export default connect(mapStateToProps, null)(CardContainer);