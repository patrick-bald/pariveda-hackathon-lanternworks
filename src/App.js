import './App.css';
import Amplify from 'aws-amplify' 
import awsconfig from './aws-exports';
import {
	AmplifyAuthenticator,
	AmplifySignIn,
	AmplifySignUp,
  AmplifySignOut
} from '@aws-amplify/ui-react';
// import UserInformationForm from './components/UserInformationForm'; 
import Admin from './components/Admin'; 

const App = () => {
  Amplify.configure(awsconfig)
    return(
	<AmplifyAuthenticator>
		<AmplifySignIn headerText="Sign In" slot="sign-in" />
		<AmplifySignUp headerText="Sign Up" slot="sign-up" />

		<div>
			<Admin />
			<AmplifySignOut />
		</div>
	</AmplifyAuthenticator>
    )
};
export default App;
