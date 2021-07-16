import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FacebookLogin from './pages/FacebookLogin';
import GithubLogin from './pages/GithubLogin';
import GoogleLogin from './pages/GoogleLogin';
import Main from './pages/Main';
 
function Routes() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/facebooklogin' component={FacebookLogin} />
        <Route path='/googlelogin' component={GoogleLogin} />
        <Route path='/githublogin' component={GithubLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
