# HOMEWORK: Tweedr!!

Let's make a cool new app called ***TWEEDR***!! Not Twitter, geez... 🙄

An Express backend has already been provided for you, because we love you all very much. You will just need to create a React frontend for it. (You shouldn't need to modify anything in the Express backend, except to connect the React frontend. The model, controllers, etc. are all set up already.)

You will continue working in your group for this mini project.

You know the drill: 
* nominate the Git Tzar 
    * IMPORTANT STEPS FOR THE TZAR:
        * `clone` THIS repo directly onto your machine
        * Create an empty repository on your GitHub account online
        * Copy the the url of your empty repository using ssh 
        * Using command `git remote set-url origin <paste-the-url-here>`
        * The `git add and commit and push`
        * Voila, you can see this repo on your own github account online
* All the teammates should clone YOUR newly created repo
* Finally, just like yesterday, Create a separate branch for each feature 
* Push to the feature branch
* Create a Pull request and assign each memeber of the team to approve it
* After the request has been approved by everyone, merge it!
 
### Wireframe

![tweedr](./assets/tweedr.png)

### Before you start

Let's start practicing project workflow best practices **OPTIONAL**.

- Wireframe the mockup into the components you want to have
- Write out your user stories
- Make a project board with the code tasks from your user stories

You will need to set up the Tweedr database.
- Create a database named `tweedr_dev`.
- Run the migration & seed files in `tweedr/db`.
- **Read the readme** in the `tweedr` directory -- it will give you all you need to know about the endpoints you'll be using.

### Working with an Express server and a react app

- [Read this tutorial on connecting an express server and React in development environment](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)

## 🚀 Completion looks like:

Your React/Express app should:

- Take an input of a Tweed
- Render all the Tweeds from the database into the browser
- Accomplish this with at least four components, possibly more:
    - `App`: holds calls to the database
    - `Input`: will take a text input and allow it to be submitted into the database
    - `TweedrFeed`: Holds `Tweed` components, which reflect the information in the database
    - `Tweed`: Holds one individual tweed
    - Any other components you see fit!

## 🚀 Your homework submission should include:

- ONE issue ticket created on this repo.
- In the title of your ticket, include the names of ALL team members
- A link to your project
- Completion, comfort, wins, losses, questions... you know the drill.

## This homework is due 🚨 11PM ON SUNDAY NIGHT 🚨
