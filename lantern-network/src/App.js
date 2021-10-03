import logo from './logo.svg';
import './App.css';
import {Box} from '@material-ui/core';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {LogIn, SignUp} from './pages/Pages';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props}/>}/>
        <Route path='/' render={(props) => <LogIn {...props}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
