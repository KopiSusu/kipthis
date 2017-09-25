/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Ribbon extends Component {
  render() {
      const { location : { pathname } } = this.props;
      return (
        <div className={`ribbon ${pathname !== '/' ? 'relative' : null}`}>
          <nav>
            <div className='left'>
              <div className='image'/>
            </div>
            <div className='right'>
              <Link to="/">Home</Link>
              <a href="//medium.com/@kipsearch">Blog</a>
              <Link to="/">Contact</Link>
            </div>
          </nav>
        </div>
      );
  }
}