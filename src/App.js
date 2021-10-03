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
import {currentUserName} from './Authorization'
import {useEffect,useState} from 'React'; 

const App = () => {
	
	const [currentUser, setCurrentUser] = useState(); 
	const getCurrentUserName = async () => {
		const currentUserName = await currentUserName(); 
		if(currentUserName)
		{
			setCurrentUser(currentUserName);
		}
	}

  Amplify.configure(awsconfig)
    return(
	<AmplifyAuthenticator>
		<AmplifySignIn headerText="Sign In" slot="sign-in" />
		<AmplifySignUp headerText="Sign Up" slot="sign-up" />

		<div>
			{ currentUser ? <UserInformationForm /> : null}
			<AmplifySignOut />
		</div>
	</AmplifyAuthenticator>
    )
};
export default App;
