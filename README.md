# Talview-Assignment-Front
This is a nodeJS based web application backend


## Getting Started
git clone https://github.com/53R3N1TY/Talview-Assignment-Back.git
cd react-auth-server
// follow below instructions

## Setting up your .env file
touch .env
// open .env and add values for: GITHUB_KEY, GITHUB_SECRET
// SESSION_SECRET
// You get the keys and secret from provider (ie. Github)

## Setup server to make https calls
// download ngrok
// run ngrok on port 8080
./ ngrok http 8080

## Update config.js file
// replace url at line 6 and line 11 with ngrok URL

## Setup Client Application
// follow the instructions of README file
git clone https://github.com/53R3N1TY/Talview-Assignment-Front.git

## Run
// Finally run the application

npm run dev
