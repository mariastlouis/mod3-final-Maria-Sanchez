import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { makeHouseData } from '../../actions';
import {getData} from '../../helper/helper';
import CardContainer from '../../container/CardContainer/CardContainer'
import loading from '../../assets/wolf.gif';

class App extends Component {
constructor () {
  super()
}

  componentDidMount = async () => {
    const getHouseData = await getData();
    this.props.storeHouses(getHouseData);
    console.log(this.props.houses)
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
         
        </div>
        <div className='Display-info'>
        
        {
          this.props.houses.data.length > 0 ? 
          <CardContainer /> :
          <img src = {loading} />
        }
        
        </div>
      </div>
    );
  }
}



export const mapStateToProps = store => {
  return {
    houses: store.houses
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    storeHouses: houses => {
      dispatch(makeHouseData(houses));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
