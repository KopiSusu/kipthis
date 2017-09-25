/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';


export default class ImgSection extends Component {
  render() {
      const { field } = this.props;

      return (
        <div className='image' style={{backgroundImage: `url(${field.imageSrc})`}}/>
      );
  }
}


