/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';

export default class Zoom extends Component {
  render() {
      return (
        <div className='zoom'>
          { this.props.children }
        </div>
      );
  }
}


