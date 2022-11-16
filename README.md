# delta-meet

## About

Initial phase of the project is to create a web application that allows users to find the best time to meet with their friends. The application will allow users to create an event and invite their friends to it. The application will then find the best time to meet with all the friends. The application will also allow users to create a poll to find the best time to meet with their friends.

## Current Status

The application is currently in the initial phase of development. Technologies used are for now Vite, Vanilla TS. We intend to host the app using Github Pages.

## Prerequisites

You will need a working installation of Node.js runtime engine and Node Package Manager (NPM), which should come bundled with Node.
Detailed installation instructions can be found **[here](https://nodejs.org/en/download/package-manager/)**.

## Preparation

**1: Clone the repository**

```console
git clone git@github.com:deltawut/delta-meet.git
```

**2: Install package dependencies**

```console
npm install
```

**3: Start a local development server**

```console
npm run dev
```

**4: Open the developement app**

Open <http://localhost:5173> in your browser.

## Development

**1: Create a new, local branch**

```console
git switch -c "my-new-feature"
#alternatively you can use
git checkout -b "my-new-feature"
```

**2: Make changes**

Changes can be made by modifying `.ts` TypeScript files inside `/src`.

**3: Commit your changes to the new branch and push**

```console
npm run commit
```
Using this command will run a "commit wizard" called Commitizen, which
will help you create a standardized commit message.

**4 Push your changes to remote**

First time push to a new remote branch will likely fail, unless you have changed your default git settings. To push changes for the first time, use `git push -u origin my-new-feature`.
 

## Tasks

For now the tasks are managed in the Projects tab. The tasks are divided into 3 categories: Backlog, In Progress and Done.

More specific tasks will be added soon!

## Deployment

Scripts for deployment, git tags and changelog are not yet implemented. For now the application is deployed manually.
