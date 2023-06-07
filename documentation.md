
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

git status: # returns the word modified in red for the code that is added and not committed yet , green means everything is committed

git log : # shows all commits in a listed way

git log --graph: # for seeing every commits in a graphical way for better understanding 

git branch :  # creating a new branch
 
git checkout [branch-name] : # Switched to a specified branch and updates the working directory

git merge : # Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is an important Git operation.

git fetch: # Downloads all the history from the remote tracking branches

