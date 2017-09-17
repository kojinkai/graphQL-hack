import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateLink from '../CreateLink/CreateLink'
import Linklist from '../Linklist/Linklist'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={Linklist}/>
            <Route exact path='/create' component={CreateLink}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
