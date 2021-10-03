import { Auth } from 'aws-amplify';

export async function signUp(username, password, email, phone_number) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export async function signIn(username,password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log("user successfully logged in: ", user);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export async function confirmUser(username,authCode) {
    try {
         await Auth.confirmSignUp(username, authCode);
    } catch (error) {
        console.log('error confirming user', error);
    }
}

export async function currentUserName()
{
    try {
        const currentUser = await Auth.currentAuthenticatedUser();
        return currentUser.username;
   } catch (error) {
       console.log('error getting current user', error);
   }
}