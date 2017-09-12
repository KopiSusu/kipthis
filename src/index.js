import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import Ribbon from './components/Ribbon';
import Landing from './components/Landing';
import Zoom from './components/Zoom';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <div className='app'>
      <Route path="/" component={Ribbon}/>
      <section>
        <Route path="/" exact component={Landing}/>
        <Route path="/:projectName/:projectId" exact component={Zoom}/>
      </section>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()

