/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;


export default class Logos extends Component {
  render() {
      return (
        <div className='hero'>
          <div className='overlay'/>
          <div className='text'>
            <h1>Level Up Your <span className='blue'>Social</span> Presence</h1>
            <p>We are social, onsite, collaborative creative developer consultancy that helps build a competitive social advantage for your business.</p>
            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1500}><button>Learn How</button></ScrollLink>
          </div>
        </div>
      );
  }
}


