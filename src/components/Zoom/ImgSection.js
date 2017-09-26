/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';


export default class ImgSection extends Component {
  render() {
      const { field } = this.props;
      const isSingle = field.imageSrc.length === 1;

      return (
        <div className={`carosel ${isSingle ? '' : 'move'}`} >
          {
            field.imageSrc.map((s) => {
              return <div className='image' style={{backgroundImage: `url(${s})`}}/>
            })
          }
        </div>
      );
  }
}


