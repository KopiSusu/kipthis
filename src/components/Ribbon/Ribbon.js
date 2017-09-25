/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

export default class Ribbon extends Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
      const { location : { pathname } } = this.props;

      return (
        <div className={`ribbon ${pathname !== '/' ? 'relative' : null}`}>
          <nav>
            <div className='left'>
              <Link to="/"><div className='image'/></Link>
            </div>
            <div className='right'>
              <Link to="/">Home</Link>
              <a href="//medium.com/@kipsearch">Blog</a>
              <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={1500}>Contact</ScrollLink>
            </div>
          </nav>
        </div>
      );
  }
}