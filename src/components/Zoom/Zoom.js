/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { projects } from '../../data';
import ImgSection from './ImgSection';
import TextSection from './TextSection';


export default class Zoom extends Component {
  render() {
      const { renderField, props: { match : { params } } } = this,
        project = projects.find((p) => p.name.split(' ').join('') === params.projectName);

      console.log(project.id === 0 || !!(project.id && !(project.id%2)))

      return (
        <div className='zoom'>
          <div className={`project ${project.id === 0 || !!(project.id && !(project.id%2)) ? 'even' : ''}`}>
            <div className='image' style={{backgroundImage: `url(${project.imageSrc})`}}/>
            <div className='text'>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <div className='logo' style={{backgroundImage: `url(${project.logoSrc})`}}/>
            </div>
            <div className='overlay' />
          </div>
          {
            project.fields.map((f, i) => (
              <div key={i} className='field'>
                {
                  renderField(f)
                }
              </div>
            ))
          }
        </div>
      );
  }

  renderField(f) {
    switch (f.type) {
      case 'image_section':
        return <ImgSection field={f}/>
      case 'text_section':
        return <TextSection field={f}/>
      default:
        return null;
    }
  }
}


