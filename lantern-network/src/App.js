import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {LogIn} from './pages/Pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' render={(props) => <LogIn {...props}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
