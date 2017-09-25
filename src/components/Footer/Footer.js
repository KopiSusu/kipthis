/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import FacebookDrawn from './../../theme/svgs/FacebookDrawn';
import EmailDrawn from './../../theme/svgs/EmailDrawn';
import TwitterDrawn from './../../theme/svgs/TwitterDrawn';

export default class Footer extends Component {
  render() {
      return (
        <div className='footer'>
          <footer>
            <div className='logo'>
            </div>
            <div className='details'>
              <h4>Kip San Francisco</h4>
              <p> Kip@Kipthis.com <span role='img'>🤖</span> Kipthis.com</p>
            </div>
            <div className='media'>
              <h4>Follow Us</h4>
              <a href="mailto:hello@kipthis.com?subject=Subscribe"><EmailDrawn/></a>
              <a href="//www.facebook.com/talkto.kip"><FacebookDrawn/></a>
              <a href="//twitter.com/kiptalk"><TwitterDrawn/></a>
            </div>
          </footer>
        </div>
      );
  }
}


