import React from 'react';
import * as actions from '../index';
import mockHouseData from '../mockData/mockCardData'

describe('Data Action tests', () => {
  it('makeHouseData has a type of GET_HOUSEDATA', () => {
    const houseData = [mockHouseData];
    const expected = {
      type: 'GET_HOUSE_DATA',
      houses
    };
  expect(actions.makeHouseData(houses)).toEqual(expected);
  })

});