# Survivle.app

## Requirements:

  * Web browser

## About Survivle.app:

  * Taking inspiration from Wordle and Squabble, Survivle tests your word solving skills while doing so under time pressure.
  * Each word is randomly pulled from a dictionary list and all the words consist of 5 letters. While you attempt to solve words, you battle to stay alive by healing damage when you correctly guess words or letters (see " HOW TO PLAY " for more information).


## How To Play:

Go to: https://www.survivle.app/

Use your GroupMe credentials to log into the developer site.

Once you have successfully logged in, go to https://dev.groupme.com/bots/new

Fill out the form to create your new bot:

  * Select the group where you want the bot to live
  * Give your bot a name
  * (Optional) Give your bot an avatar by providing a url to an image
  * Click submit

## Sharing Your Results:

  * Clone or fork this repository
  * run `npm install`
  * Edit the `src/config.js` file with your Bot ID, Group ID, access token, and your Giphy API key
  * Edit the `app.json` file with your bot name, logo url, and repo url

## Add your bot to your Heroku app:

Go to Heroku and create a new app.

On your app page, click settings in the top navigation and click the Reveal Config Vars button.

Then click edit and fill out the form to add an environment variable to your app:

  * In the "key" field type: BOT_ID
  * In the "value" field paste your Bot ID
  * Click the save button

Next go back to the bot page on the GroupMe developer site, and add the callback url to your bot. The callback url should just be http://"your app name".herokuapp.com/

Then go to the package.json file and change the repository url to the url of your repository and the name to the name of the heroku app you just create.

## Deploy on Heroku:

Log in to Heroku and go to your app and the Deploy tab. Link the app to your GitHub repository, and then deploy it. It should be up and running.

