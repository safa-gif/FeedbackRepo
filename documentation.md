
# First step to pushing an local folder to a  GitHub repository, we need to  run the following commandes:

git init (using command prompt)
# Second, we have to add all the updates to the github repository;

git add .

# Third command to run is :

git commit -m "first commit"

# Fourth command is :

git remote add origin "github repository link"

# Firth command is :

git push -u origin master

# Some git command that you might need:

git status: # Returns the word modified in red for the code that is added and not committed yet , green means everything is committed

git log : # shows all commits in a listed way

git log --graph: # for seeing every commits in a graphical way for better understanding 

git branch :  # Creating a new branch
 
git checkout [branch-name] : # Switched to a specified branch and updates the working directory

git merge : # Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is an important Git operation.

git fetch: # Downloads all the history from the remote tracking branches

# Creating feedback App

We will be starting by building the FrontEnd App first whith REACT and then we will connected with the backend using RESTFUL APIs.
That's all to make the app a full stack App.

Our app will include a real time validation of inputs, we will be counting the average of the different ratings and also we will have the total nummber of reviews.

We can update our reviews and delete the review.
We will use the context API as well.

# How to create a reactApp

You need to have Nodejs installed on your computer.

You also need to have an editor: Visual Studio Code, Sublime Text...

You need to review Javascript ES6 concepts, and HTML DOM elements.

In order to be able to create a react application, we run the following commande: # npx create-react-app theAppName

Then in the line command we run : # cd theAppName

Followed By this command (to run the app on default browser): # npm start 
