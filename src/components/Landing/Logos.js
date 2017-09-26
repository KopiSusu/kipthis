/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';

const logos = [
  '//witness.org/wp-content/uploads/2014/04/fastCompany-721x227.png',
  '//s3.amazonaws.com/build-inauth/wp-content/uploads/2017/02/03150910/transparent-paymentssource-logo-01-400x250.png',
  '//3.bp.blogspot.com/-UgWxBnw1RFY/VEAsR68cN7I/AAAAAAAAFqE/SMt0xbvyaC0/s1600/Logo%2BTime_Magazine.png',
  '//unify.id/images/venturebeat_logo.png',
  '//www.stickpng.com/assets/images/58482332cef1014c0b5e49be.png'
]

export default class Logos extends Component {
  render() {
      return (
        <div className='logos'>
          <h1>Featured in</h1>
          {
            logos.map((l) => (
              <div className='image' style={{backgroundImage: `url(${l})`}}/>
            ))
          }
        </div>
      );
  }
}
