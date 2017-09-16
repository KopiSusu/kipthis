/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { projects } from '../../data';
import Logos from './Logos'
import Hero from './Hero'


export default class Landing extends Component {
  render() {
      return (
        <div className='landing'>
          <Hero/>
          <Logos/>
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


