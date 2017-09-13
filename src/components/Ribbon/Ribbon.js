/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Ribbon extends Component {
  render() {
      return (
        <div className='ribbon'>
          <span/>
          <nav>
            <div className='left'>
              <div className='image'/>
            </div>
            <div className='right'>
              <Link to="/">About</Link>
              <Link to="/">How we help</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Contact</Link>
            </div>
          </nav>
        </div>
      );
  }
}


