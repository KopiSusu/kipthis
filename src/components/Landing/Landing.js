/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
              <Link to={`/${p.name.split(' ').join('')}`} key={p.id} className='project'>
                <div className='image' style={{backgroundImage: `url(${p.imageSrc})`}}/>
                <div className='text'>
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                  {
                    p.logoSrc.map((s, i) => (
                      <div key={i} className='logo' style={{backgroundImage: `url(${s})`}}/>
                    ))
                  }
                </div>
                <div className='overlay' />
              </Link>
            ))
          }
        </div>
      );
  }
}


