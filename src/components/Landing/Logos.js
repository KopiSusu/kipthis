/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import Fastcompany from './../../theme/svgs/Fastcompany';
import Paymentsource from './../../theme/svgs/Paymentsource';
import Time from './../../theme/svgs/Time';
import Venturebeat from './../../theme/svgs/Venturebeat';
import Wallstreet from './../../theme/svgs/Wallstreet';

export default class Logos extends Component {
  render() {
      return (
        <div className='logos'>
          <h1>Featured in</h1>
          <Fastcompany/>
          <Paymentsource/>
          <Time/>
          <Venturebeat/>
          <Wallstreet/>
        </div>
      );
  }
}


