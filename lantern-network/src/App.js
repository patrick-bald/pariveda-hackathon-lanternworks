import logo from './logo.svg';
import './App.css';
import {Box} from '@material-ui/core';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {LogIn, SignUp, Profile} from './pages/Pages';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props}/>}/>
        <Route path='/' render={(props) => <LogIn {...props}/>}/>
        <Route path='/me' render={(props) => <Profile {...props}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
