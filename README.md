# Tier List

An application for categorizing different items of a related class.

![Tier List GIF](https://github.com/haiderzaidi07/haiderzaidi07/blob/main/tierlist-new.gif?raw=true)

This repository hosts the backend for the application, the frontend can be accessed [here](https://github.com/haiderzaidi07/tier-list-frontend)

## Live Demo

The live demo of this website can be accessed at: https://tier-list.netlify.app/


## Features

- CRUD operations to Add/Upgrade/Downgrade/Delete Items
- OAuth2 support for Google, GitHub & Discord
- Fully Responsive


## Tech Stack

**Client:** React, TypeScript, Redux, TailwindCSS

**Server:** Node.js, Express, MongoDB, JWT, Passport.js


## Branches

The codebase is split into different branches:

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

Go to oauth branch

```bash
  git checkout oauth
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

- Learned to use Passport.js to add Google, GitHub, and Discord OAuth services
- Learned to create responsive web apps using Tailwind


## Further Optimizations

- Better UI for Tiers having no Items
- Drag and Drop feature for Upgrading and Downgrading Items <!-- using beautiful dnd package -->
- Improve error prevention for matching usernames across different providers
- Improve type safety of the backend using TypeScript
