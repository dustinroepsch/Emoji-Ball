# Emoji Ball

## What is Emoji Ball ⚽️?

Emoji Ball is an open source clone of the soccer game built into Facebook Messenger.

*🚨 Work In Progress 🚨*
You can play the current version [here.](https://dustinroepsch.github.io/Emoji-Ball/)

## How do I Build?

Emoji Ball is small enough for now that I just use [Parcel JS](https://parceljs.org/) for now.

### Install Parcel JS

`npm install -g parcel-bundler`

### Live Edit

Parcel comes with a dev server that will host Emoji Ball for you and live hot reload your changes during development. 

`parcel index.html`

After running the command above you should be able to view the game by visiting `http://localhost:1234/`

### Production Build

If you want to serve this game, you can do a production build by running 

`parcel build index.html`

which will create a new `index.html` with generated `*.js` sources in the `dist` folder, which can be hosted wherever you want.
