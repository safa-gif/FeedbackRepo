# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

###  the files and folders  in our react app

- package.json : includes all of our dependencies react, react-dom,react-scripts, web-vitals...

- git ignore : is a git repository that specifies files for git not to track. 
Blank lines are ignored. 
Lines begining with # are ignored.
Any files that matches the pattern will not be tracked by git.

We also have two folders:

- public: this folder contains all of our static files. 
We have the index.html which the single page that is loaded in the browser (SPA). Everything we build in our react app is done within the index.html specifically within the root.
We can add CDI if we want to use fontawesome...

- src: source has many files such as indes.js, that contains the content to display on the browser.

We are re-builing the index.js and App.js files.

### React Components 

They can be :
- classes : the old way to create a react components.
- functions: functional compoents using react hooks (state, life cycles)

React usues Strict Mode: offers additional check-ups and warnings.

We have many ways to do styling in React: the easiest way is by creating a global CSS file.

### Introduction to JSX : Extension

It is a Syntax Extension for JavaScript, it enables us to write HTML elements within JavaScript compoents.

In JSX we always need to have one parent element containing different HTML elements. It can be a `<div></div>` or `<React.Fragment></React.Fragment> | <></>`.

### The two Attribute tahta are different from regular HTML Attribute 

- Class is a reserved name is React to refer to CSS Class in React we use ClassName.

- For: attribute in forms can not be used with React beacuse it stands for For loop instead it is replaced with htmlFor.

### Dynamic Values and Lists in JSX:

in our App component before the return we can create function, varibales... 

We can display the varibles content in the return inside the fragment by using `{varibleName}`. 
The `{}` can be used for any type of expressions.


### Builing our first component in Feebdack App

- We are going to create a new component called Header inside components( will be containing all our componenets ) folder under src folder.

- We need to install ES7 React/Redux... extensions from Visual Studio Code (allows us to generate components automatically  )

- props: can be passed into a component (they are the properties of that component)

We can set default props inside the component.
We can also specify the type of our props with propTypes.

- We are creating the FeedbackItem file  which is a component that shows a single febdack item, which will include the rating and the text.

- We are importing useState in FeebdbackItem File, the text and the rating should be part of the state.

- To use the setRating inside the useState for the variable rating we created a temporary button, and made sure to add an event when we cn share the satte of rating.
### Styling in React

- We can apply style using inside the component we set `<Compnent style={{property: 'settings'}}></Compnent>` or we can set a `const variableStyle= {property: 'settings'}` before the return and then we use it in the compnent `<Component style={variableStyle}></Component>` we use a styling file and imported in the component.

- We also can use special styling libraries such as Chakra UI, Material UI, we we get specific components that have already designed components Navbars, Footers...


### State 

- A state in react is immutable, we can only change it using its associated method.

There are two types pf state:

- Compoenet Level State : is a data that is associated with a one specific component. No other component need to use that data.

Exemple: a navigation that have an opening and a closing state, there is no reason to acess that from any other component.

- App Level/ Global State :
we have different ways to store app level state

Exemple: is our feeback items state we nedd to use those in multiple components : will have our feebddack list where we will display the list items so we need to share that state among multiple components. 


- useState : is a specific hook in React that enables us to use state

- In some cases we need to have access to a previous state, we can pass functions inside the setRating instead of passing a value.


### Components and Reactivity


- We can use the useState hook to create a state and a function that will update the state.

- We will be ading some app level state, which is going to be all of our feedback items, we will have to pass anything we need from that global state in our App.js.

- we created a folder data containing FeedbackData.js and we've passed it to useState (App.js)

- To be able to display the list of feeback we create a file and we are going to pass its props to App using useState feedback.

- We are mapping the list by using `<FeedbackList feedback={feedback}/>` 

- We are creting a component strictly for styling, we'll be creting the card under the shared folder that relies under the components folder.

- The content of the card will be displayed as its children and destructured within Card props.

- We are using conditional class if the class card reversed is true than we are applying the style of reverse `<div className={`card ${reverse && 'reverse'}`}>`.

- We are using conditional styling of the card where we are setting the reverse class of the card inline: `<div className="card" style={{backgroundColor:reverse ? "#000": "E966A0", color:reverse ? "E966A0": "#000"}}></div>`.

- We are using PropTypes to set the types of the props for our different components.

- We are adding icons that allow us t delete and modify the feedback items. are using react-icons, this library includes fontawesome as well as other libraries: material icons and bootstrap,to achieve the quest.

- We are using handleDelete to delete the feebackItem from the list of feedback that are dsiplayed on the App.

- We need the deletefeedback Function in App.js because its we where we can actually delete it. We are props drilling from feedbackItem into FeedbackList into App where the action actually happens. We are currently not using Context API.

- We are going to create our feedbackStats component: we'll count the average of the rating and displays the number of the feedback items.

