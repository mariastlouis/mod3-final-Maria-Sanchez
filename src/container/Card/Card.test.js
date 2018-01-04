import React from 'react';
import Card from './Card.js';
import {shallow} from 'enzyme';

let renderedCard; 

describe ('Card', () => {
  beforeEach(() => {
    renderedCard = shallow (
      <Card 
      name = 'mockname'
      founded = 'mockfounded'
      coat = 'mockcoat'
      words = 'mockwords'
      seats = 'mockseats'
      titles = 'mocktitles1'
        />
    )
  });

  it('should render correctly', () => {
    console.log(renderedCard)
    expect(renderedCard).toBeDefined();
  })

})