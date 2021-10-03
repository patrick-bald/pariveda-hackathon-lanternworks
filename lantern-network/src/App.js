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

const App = () => {
  Amplify.configure(awsconfig)
    return(
	<AmplifyAuthenticator>
		<AmplifySignIn headerText="My Custom Sign In Header" slot="sign-in" />
		<AmplifySignUp headerText="My Custom Sign Up Header" slot="sign-up" />

		<div>
			<UserInformationForm />
			<AmplifySignOut />
		</div>
	</AmplifyAuthenticator>
    )
};
export default App;
