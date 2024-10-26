
# SpaceTap - Telegram Mini App Game

Welcome to **SpaceTap** – a thrilling, tap-based game on Telegram where you pilot a rocket through space, gathering points and aiming for high scores! Challenge yourself and your friends to see who can reach the farthest corners of the universe. 🚀

## Overview

This project integrates a React frontend with a Supabase backend and Telegram bot as an entry point, creating a seamless experience from bot interaction to a live frontend demo. Key components include:

- Frontend: Built with React and Context API for state management, leveraging Apollo Client to make GraphQL requests. The frontend is accessible directly via URL, but will display a demo user by default if accessed without bot authentication.

- Backend: Uses Supabase as a realtime, scalable database for efficient data storage and retrieval. Supabase also serves as the GraphQL server to handle data fetching and persistence.

- Entry Point: A Telegram Bot created with Node.js and Express, utilizing Telegram’s API library. This bot acts as the primary access point to authenticate users before redirecting them to the main frontend.



## Screenshots
<div >
<img src="https://github.com/CodeforAbj/SpaceTap/blob/768ac9f8e8151213f097c9dda053b2531b6d187f/Readme/animation.jpeg" alt="App Screenshot" width="300" />

<img src="https://github.com/CodeforAbj/SpaceTap/blob/768ac9f8e8151213f097c9dda053b2531b6d187f/Readme/collage.jpg" alt="Various Levels" width="500" />
</div>


### Game Features
- **Simple Tap Mechanics:** Tap the rocket to earn points – the more taps, the higher the score!

- **Level Progression:** Move up through the Earth's atmosphere, starting from the Troposphere to beyond milky way galaxy. and With Every Level Scale up Your fuel capacity and points multiplier

- **Fuel Bar:** The rocket uses fuel with each tap, recharging automatically every second. 

- **Progress Bar:** Shows you how far are you from next level milestone as well current level progress. 

- **Saved Scores:** Your points and progress are automatically saved, allowing you to pick up where you left off.

- **Responsive Animations:** Enjoy touch-based animations that make the game feel more interactive and dynamic.

### Tech Features

- Real-time Data: Supabase enables real-time data syncing, making the app responsive to live changes.
- GraphQL API: Streamlined data handling with efficient querying and mutation.
- Telegram Bot Integration: Direct interaction with the app via Telegram.
- Demo User Access: Visitors can view the frontend with limited access as a demo user.

## Tech Stack

- **Frontend**: React, Context API, Apollo Client
- **Backend**: Supabase (Database) + GraphQL-Yoga (server)
- **Bot**: Node.js, Express, Telegram API

## How to Play

Access the app through Telegram:

1. Go to https://t.me/AbjSpaceTapBot.
2. Type or tap the command:
```
/start
```
3. Select Open Mini App to start playing.

## Installation
### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd tapMe-frontend
    ```
2. Install Dependencies 
    ```
    npm install
    ```
 3. Set up the environment variables:

- Create a .env file in the root of tapMe-frontend.
- Add the following variables:
```
VITE_GRAPHQL_URL=<your Backend url>
VITE_AUTH_TOKEN=<Secret key same as backend>
``` 
4. Start the development server to test locally:
```
npm run dev
```
5. To test on Local area Network
```
npm run mobile
```

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd Backend
    ```
2. Install Dependencies 
    ```
    npm install
    ```
 3. Set up the environment variables:

- Create a .env file in the root of tapMe-frontend.
- Add the following variables:
```
SUPABASE_KEY = <Supabase secret key>
SUPABASE_URL = <Supabase url>
SECRET_KEY = <Same to be sent from front end>
``` 
4. Start the development server to test locally:
```
node index.js
```

### Bot Setup

1. Navigate to the bot directory:
   ```
   cd Bot/Telegram-bot
    ```
2. Install Dependencies 
    ```
    npm install
    ```
 3. Set up the environment variables:

- Create a .env file in the root of tapMe-frontend.
- Add the following variables:
```
TELEGRAM_BOT_TOKEN = <telegram auth token>
``` 
4. Start the development server to test locally:
```
node index.js
```
### Collaboration and Feedback

We welcome collaborators and feedback to help improve this project! If you're interested in contributing or have suggestions, feel free to:

- **Fork and create a pull request** to propose changes.
- **Open an issue** for bug reports, feature requests, or feedback.
- **Contact us directly** for collaboration opportunities.

Thank you for your interest in enhancing this project!


## Authors

- [@codeforabj](https://www.github.com/codeforabj)

