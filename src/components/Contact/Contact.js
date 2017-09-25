/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Element    = Scroll.Element;

export default class Contact extends Component {
  render() {
      return (
        <Element name="contact" className="contact">
          <h1>Want to work with us?</h1>
          <p>Let us know how Kip can help you!</p>
          <form action="//formspree.io/hello@kipthis.com" method="POST">
            <input type="text" placeholder='First Name' name="firstname" />
            <input type="text" placeholder='Last Name' name="lastname" />
            <input type="text" placeholder='Company Name' name="company" />
            <input type="email" placeholder='Email' name="_replyto" />
            <textarea type="text" placeholder='How can we help?' name="description" />
            <input className='button' type="submit" value="Contact Kip" />
          </form>
        </Element>
      );
  }
}


