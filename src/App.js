import './App.css';
import Amplify from 'aws-amplify' 
import awsconfig from './aws-exports';
import {
	AmplifyAuthenticator,
	AmplifySignIn,
	AmplifySignUp,
  AmplifySignOut
} from '@aws-amplify/ui-react';
import UserInformationForm from './components/UserInformationForm'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './pages/Admin'
import Profile from './pages/Profile'

const App = () => {
  Amplify.configure(awsconfig)
    return(
	<AmplifyAuthenticator>
		<AmplifySignIn headerText="Sign In" slot="sign-in" />
		<AmplifySignUp headerText="Sign Up" slot="sign-up" />

		<div>
		<Router>
			<Switch>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/admin">
					<Admin />
				</Route>
				<Route path="/">
					<UserInformationForm />
				</Route>
			</Switch>
			</Router>
			<AmplifySignOut />
		</div>
	</AmplifyAuthenticator>
    )
};
export default App;
