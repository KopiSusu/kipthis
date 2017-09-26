/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class ImgSection extends Component {

  constructor(props) {
    super(props)
    this._startPolling = this._startPolling.bind(this)
  }

  state = {
    imageIndex: 0
  }

  _startPolling(stop) {
    const { field } = this.props,
      { imageIndex } = this.state;

    if(stop) {
        clearTimeout(this.timeout)
    } else {
        this.timeout = setTimeout(() => {
            // do stuff
            this.setState({imageIndex: imageIndex === ( field.imageSrc.length - 1 ) ? 0 : imageIndex+1 })
            this._startPolling()
        }, 7000);
    }
  }

  componentWillMount() {
    this._startPolling()
  }

  componentWillUnmount() {
    this._startPolling(true)
  }

  render() {
      const { field } = this.props,
        { imageIndex } = this.state;

      const image = [field.imageSrc[imageIndex]];
      const isSingle =  field.imageSrc.length === 1;

      return (
        <div className={`carosel`}>
          {
            !isSingle ? <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}>
              {
                image.map((s) => (
                  <div key={s} className='image' style={
                    {
                      backgroundImage: `url(${s})`, 
                      width: window.innerWidth
                    }
                  }/>
                ))
              }
            </ReactCSSTransitionGroup> : image.map((s) => (
              <div key={s} className='image' style={
                {
                  backgroundImage: `url(${s})`, 
                  width: window.innerWidth
                }
              }/>
            ))
          }
          
        </div>
      );
  }
}


