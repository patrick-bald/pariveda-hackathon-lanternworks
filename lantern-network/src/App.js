import logo from './logo.svg';
import './App.css';
import {Box} from '@material-ui/core';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {LogIn, SignUp, Profile} from './pages/Pages';
import Footer from './footer';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props}/>}/>
        <Route path='/me' render={(props) => <Profile {...props}/>}/>
        <Route path='/' render={(props) => <LogIn {...props}/>}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
