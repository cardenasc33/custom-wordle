# Survivle.app

## Requirements:

  * Web browser

## About Survivle.app:

  Taking inspiration from Wordle and Squabble, Survivle tests your word solving skills while doing so under time pressure.
  Each word is randomly pulled from a dictionary list and all the words consist of 5 letters. While you attempt to solve words, you battle to stay alive by healing damage when you correctly guess words or letters (see " HOW TO PLAY " for more information).


## How To Play:

Go to: https://www.survivle.app/

* Keep guessing words until you have correctly guessed 6 of them or your health points (HP) run out!
* You lose 1 HP every second and lose 20 HP when you miss a word within 6 tries.
* You heal 1 HP for every letter found and heal 20 HP when you correctly guess a word.
* Yellow letters indicate that the letter is in the word but in a different position.
* Green letters indicate that the letter is in the correct position.

## Sharing Your Results:

* Click the "Share" button to copy the game results to the clipboard.
* Go to any text editor or chat (ex. Discord, iMessage, Twitter) that allows clipboard pasting and paste your results

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

