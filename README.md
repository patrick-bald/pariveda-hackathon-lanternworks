# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Amplify authentication 

In order to run the project locally, a developer will require AWS access via a new IAM user, once the account is created, follow the guide here to set up the amplify CLI: [https://docs.amplify.aws/cli/start/install/#install-the-amplify-cli](https://docs.amplify.aws/cli/start/install/#install-the-amplify-cli)

With the amplify CLI installed, fetch the environment config from the amplify console, currently the command is:  amplify pull --appId dwiosft55032w --envName staging
If you're prompted for a username and password, access the Amplify console, go to the lantern project, click the backend environments tab, and log into the admin UI. this will log in the user automatically. Once this has been completed, finish the set up in the CLI

This command will pull environment configurations from AWS and place them in a local amplify/ directory.

## API Gateway Requests

/user/{userid} 
- GET -> get user by user Id

/user
- POST -> create new user (mentor, mentee, admin)
- {
    "type": <type>, /mentor/mentee/admin
    "email": <email>,
    "fullName": <fullName,
    "pronouns": <pronouns>,
    "school": <school>,
    "experience": [],
    "mentee": <menteeName>,
    "menteeId": <menteeId>,
    "mentor": <mentorName>,
    "mentorId": <mentorId>
}

/mentors
- GET -> get all mentors

/mentees
 - GET -> get all mentees
