import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import Ribbon from './components/Ribbon';
import Landing from './components/Landing';
import Zoom from './components/Zoom';
import Footer from './components/Footer';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <div className='app'>
      <Route path="/" component={Ribbon}/>
      <section>
        <Route path="/" exact component={Landing}/>
        <Route path="/:projectName" exact component={Zoom}/>
      </section>
      <Route path="/" component={Footer}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()

