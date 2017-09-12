/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';

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

            </div>
          </nav>
        </div>
      );
  }
}


