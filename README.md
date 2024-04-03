# Tier List

An application for categorizing different items of a related class.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

This repository hosts the backend for the application, the frontend can be accessed [here](https://github.com/haiderzaidi07/tier-list-frontend)

## Live Demo

The live demo of this website can be accessed at: https://tier-list.netlify.app/


## Features

- CRUD Operations to add/upgrade/downgrade/delete items
- OAuth2 support for Google, GitHub & Discord
- Fully Responsive


## Tech Stack

**Client:** React, TypeScript, Redux, TailwindCSS

**Server:** Node.js, Express, MongoDB, JWT, Passport


## Branches

The progress on this codebase is done in different branches:

- [main](https://github.com/haiderzaidi07/tier-list-backend)
- [v2](https://github.com/haiderzaidi07/tier-list-backend/tree/v2)
- [jwt-auth](https://github.com/haiderzaidi07/tier-list-backend/tree/jwt-auth)
- [oauth](https://github.com/haiderzaidi07/tier-list-backend/tree/oauth)


## Run Locally

Clone the project

```bash
  git clone https://github.com/haiderzaidi07/tier-list-backend.git
```

Go to the project directory

```bash
  cd tier-list-backend/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_STRING`
MongoDB Connection String

`SECRET`
JWT Secret

`COOKIE_KEY`
Session Secret

`GOOGLE_CLIENT_ID`
`GOOGLE_CLIENT_SECRET`

`GITHUB_CLIENT_ID`
`GITHUB_CLIENT_SECRET`

`DISCORD_CLIENT_ID`
`DISCORD_CLIENT_SECRET`


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


## Further Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility