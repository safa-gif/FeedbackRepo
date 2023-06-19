### Section: 1 Introduction

# the files and folders  in our react app
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

# React Components 

They can be :
- classes : the old way to create a react components.
- functions: functional compoents using react hooks (state, life cycles)

React usues Strict Mode: offers additional check-ups and warnings.

We have many ways to do styling in React: the easiest way is by creating a global CSS file.

### Section2: React Basics & JSX :
# Introduction to JSX : Extension

It is a Syntax Extension for JavaScript, it enables us to write HTML elements within JavaScript compoents.

In JSX we always need to have one parent element containing different HTML elements. It can be a `<div></div>` or `<React.Fragment></React.Fragment> | <></>`.

# The two Attribute that are different from regular HTML Attribute 

- Class is a reserved name is React to refer to CSS Class in React we use ClassName.

- For: attribute in forms can not be used with React beacuse it stands for For loop instead it is replaced with htmlFor.

# Dynamic Values and Lists in JSX:

in our App component before the return we can create function, varibales... 

We can display the varibles content in the return inside the fragment by using `{varibleName}`. 
The `{}` can be used for any type of expressions.


### Section: 3 Components, Props & Stats

#  Builing our first component in Feebdack App
- We are going to create a new component called Header inside components( will be containing all our componenets ) folder under src folder.

- We need to install ES7 React/Redux... extensions from Visual Studio Code (allows us to generate components automatically  )

- props: can be passed into a component (they are the properties of that component)

We can set default props inside the component.
We can also specify the type of our props with propTypes.

- We are creating the FeedbackItem file  which is a component that shows a single febdack item, which will include the rating and the text.

- We are importing useState in FeebdbackItem File, the text and the rating should be part of the state.

- To use the setRating inside the useState for the variable rating we created a temporary button, and made sure to add an event when we cn share the satte of rating.
# Styling in React

- We can apply style using inside the component we set `<Compnent style={{property: 'settings'}}></Compnent>` or we can set a `const variableStyle= {property: 'settings'}` before the return and then we use it in the compnent `<Component style={variableStyle}></Component>` we use a styling file and imported in the component.

- We also can use special styling libraries such as Chakra UI, Material UI, we we get specific components that have already designed components Navbars, Footers...


# State 

- A state in react is immutable, we can only change it using its associated method.

There are two types pf state:

- Compoenet Level State : is a data that is associated with a one specific component. No other component need to use that data.

Exemple: a navigation that have an opening and a closing state, there is no reason to acess that from any other component.

- App Level/ Global State :
we have different ways to store app level state

Exemple: is our feeback items state we nedd to use those in multiple components : will have our feebddack list where we will display the list items so we need to share that state among multiple components. 


- useState : is a specific hook in React that enables us to use state

- In some cases we need to have access to a previous state, we can pass functions inside the setRating instead of passing a value.


# Components and Reactivity


- We can use the useState hook to create a state and a function that will update the state.

- We will be ading some app level state, which is going to be all of our feedback items, we will have to pass anything we need from that global state in our App.js.

- we created a folder data containing FeedbackData.js and we've passed it to useState (App.js)

- To be able to display the list of feeback we create a file and we are going to pass its props to App using useState feedback.

- We are mapping the list by using `<FeedbackList feedback={feedback}/>` 

- We are creating a component strictly for styling, we'll be creating the card under the shared folder that relies under the components folder.

- The content of the card will be displayed as its children and destructured within Card props.

- We are using conditional class if the class card reversed is true than we are applying the style of reverse `<div className={`card ${reverse && 'reverse'}`}>`.

- We are using conditional styling of the card where we are setting the reverse class of the card inline: `<div className="card" style={{backgroundColor:reverse ? "#000": "E966A0", color:reverse ? "E966A0": "#000"}}></div>`.

- We are using PropTypes to set the types of the props for our different components.

### Section 4: Forms, Validation & Simple Animation


# Counting AVG ratings, Deleting feedback Item

- We are adding icons that allow us to delete and modify the feedback items. are using react-icons, this library includes fontawesome as well as other libraries: material icons and bootstrap,to achieve the quest.

- We are using handleDelete to delete the feebackItem from the list of feedback that are dsiplayed on the App.

- We need the deletefeedback Function in App.js because its we where we can actually delete it. We are props drilling from feedbackItem into FeedbackList into App where the action actually happens. We are currently not using Context API.

- We are going to create our feedbackStats component: we'll count the average of the rating and displays the number of the feedback items.

# Adding FeedbackForm component, real time input validation and Rating Select Component

- We'll be adding the form where we can add feedback with FeedbackForm Component.

- We are using forms we talk about component level state, we have a piece of state for each element in the form.  

- We will be adding some real time validation on the review from the input and will disable the btn until we have 10 caracters entered.

- We are passing the props select into FeebdackForm from RatingSelect where are returning the selected radio button.

- We will be sudmitting our form right now, by creating an event handler in the form by using onSumit event on the form.

- We will be adding handleAdd inside the FeedbackForm in App.js that usues addHandler method.

- we are using UUID of react to create an id to the new feedback.

### Fade Animation with Framer Motion

- We need to install framer-motion library v4.1.17

### Section 5: Creating Routes & links

# Creating Routing (React router-dom)

- We'll be installing react-router-dom that enables user in the client side routing. 

- Client side routing allows your app to update the URL from a link click without making another request for another document from the server.

- Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

- We create AboutPages under pages folder where separete pages where will be routing are held.

- We are using Browser Router from react-router-dom : uses the HTML 5  histoy API to keep our UI in sync with the URL.

- we can use Hash Browser as well from react-router-dom : usues the hash portion of the URL to keep it in sync. (#)

- Browser router as Routes, Route, Routes ,  Routes.

# NavLinks and using useParams :


- We use `Link` whenever we want to do any inner linking in our site. It is  from the library react-router-dom to be able to navigate between pages in out react app, the navigation is instant no refreshing.

- We can pass objects in the link `<Link to={{pathname: '/about', search: '?sort=name', hash: '#hello'}}/>`.

- NavLink is similiar to Link, it is also used to navigate, but it can also hold a specific class for active links.

- We can specify a certain styling for active links , than we utilize `NavLink`.

- We use the hook useParams to get the params for exemple the number of the post or the idea of the post.

# Navigate and NESTTED Routes


- A `<Navigate> `element changes the current location when it is rendered. It's a component wrapper around useNavigate, and accepts all the same arguments as props.

- We can display certain information then navigate to certain pages with `useNavigate`.

- `Routes, Routes`are used in componenet to manage embbedded routing such as we are using in Post component.

### Section6 :  Creating a ContextAPI, useContext Hook & Deployment

# !SECTION : Creating a Context Provider

- Context provides a way to pass data through the component tree without having to pass props down manually at every level.

- We use `useContext, createContext` hooks because the highest compoenent in the stack requires access to the state from nested componnents. Without `Context` hook we use `prop drilling`:  passing the state as "props" through each nested component. 

- We import  `createContext` and initialized it, next we use `ContextProvider` to wrap the tree of components taht need the`State Context`. 

- With the `ContextProvider` we wrap child components and supply the state value.

- To be able to use Contest in a child component, we need to access it using the `useContext` hook.
- We create a FeedbackContext file and a provider  in our app under src.

- We changes the addFeeback method into a global state. We will be using `useeffect` hook because we need to know the previous state of the feedback item which we want to edit.

# Using JSON Server as a BackeNd for feedbackApp

- We will be using JSON Server as a Mock Backend  to fetch data. 
Https STATUS Code :

- 1** : Informational (Request received / processing)
- 2**: Successs (Successfully received)
- 3**: Redirect (Further action must be taken/redirect)
- 4**: Client Error (Request doesn't have what it needs)
- 5**: Server Error (Server failed to fulfill a valid request)

- We need to installed it: JSON Server and used as a mock backend. When we used wwe need to add a script in our package.json to be able to run json-Server.

# Running client & Server with Concurrently

- Concurrently allows us to run multiple commands with one script `"dev" : "concurrently \'npm run server\' \'npm start'\"`

# Fetch Data from Mock Backend

- We are fetching Data from backend to display it on the frontend.
- We are setting isLoading state , for hen the page is being loaded.

# Spinner Component :

- We are using a spinner gif and creating a spinner to dislay when the page is being loaded in the browser.


