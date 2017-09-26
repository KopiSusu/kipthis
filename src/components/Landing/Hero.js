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
            <h1>Level Up Your <span className='blue'>Tech</span> Presence</h1>
            <p>From prototype to product launch, Kip is a full service design & tech partner using frontier technologies to produce real measurable results.</p>
            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1500}><button>Contact Kip</button></ScrollLink>
          </div>
        </div>
      );
  }
}


