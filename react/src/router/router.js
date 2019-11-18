import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Common from '../layout'
import Login from '../pages/login'
import App from '../App'

class Router extends React.Component{
  render(){
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' render={()=>
              <Common>
                {this.props.children}
              </Common>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}

export default Router