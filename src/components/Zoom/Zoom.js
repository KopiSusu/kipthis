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

      return (
        <div className='zoom'>
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


