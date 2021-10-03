import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {LogIn} from './pages/Pages';
import Amplify from 'aws-amplify' 
import awsconfig from './aws-exports';

function App() {
  Amplify.configure(awsconfig)
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' render={(props) => <LogIn {...props}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
