import React, { Component } from 'react';
import About from './About';
import CarouselBox from './CarouselBox';
import Contact from './Contact';
import IntroVideo from './IntroVideo';
import Portfolio from './Portfolio';
import Team from './Team';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='intro-block'>
          <IntroVideo></IntroVideo>
          <CarouselBox></CarouselBox>
        </div>
        <About></About>
        <Team></Team>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
      
    )
  }
}
