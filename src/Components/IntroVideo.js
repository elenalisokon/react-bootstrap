import React, { Component } from 'react';

export default class IntroVideo extends Component {
  render() {
    return (
      <div className='intro-video'>
        <video autoPlay loop muted>
          <source src="../assets/pexels-sayedhagrs.webm" type="video/webm" />
          <source src="../assets/pexels-sayedhagrs.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
}
