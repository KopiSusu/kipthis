/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { projects, logoDump } from '../../data';
import Fastcompany from './../../theme/svgs/Fastcompany';
import Paymentsource from './../../theme/svgs/Paymentsource';
import Time from './../../theme/svgs/Time';
import Venturebeat from './../../theme/svgs/Venturebeat';
import Wallstreet from './../../theme/svgs/Wallstreet';


export default class Landing extends Component {
  render() {
      return (
        <div className='landing'>
          <div className='hero'>
          </div>
          <div className='logos'>
            <h1>Featured in</h1>
            <Fastcompany/>
            <Paymentsource/>
            <Time/>
            <Venturebeat/>
            <Wallstreet/>
          </div>
          {
            projects.map((p, i) => (
              <div key={p.id} className='project'>
                <div className='image' style={{backgroundImage: `url(${p.imageSrc})`}}/>
                <div className='text'>
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                  <div className='logo' style={{backgroundImage: `url(${p.logoSrc})`}}/>
                </div>
                <div className='overlay' />
              </div>
            ))
          }
        </div>
      );
  }
}


