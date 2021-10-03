import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {LogIn, SignUp} from './pages/Pages';
import Amplify from 'aws-amplify' 
import awsconfig from './aws-exports';

function App() {
  Amplify.configure(awsconfig)
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
