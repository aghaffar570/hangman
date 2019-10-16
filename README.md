# Word Guessing Game (Hangman)

## Game rules
- At the start of the game the computer/secret-keeper will choose a dictionary word
- The guesser loses the game if they guess 6 letters that are not in the secret word
- The guesser wins the game if they guess all letters in the secret word correctly and have
not already lost the game per the conditions above


## Local Setup
run the client and server dev env in parallel
```
npm run dev
```

## Features
- configure the word's "difficulty level" based on the user's preference
- track the user's score per browser session
