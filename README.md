# Valopedia 👾

Valorant Encyclopedia — where you will find everything about Valorant; from weapons, agents, to players.

## Live Preview

Not yet deployed — error is occuring

![Error is occuring while deploying to vercel](/public/md-images/error.jpeg)

## API

Please refer to the `.env.example`

create a `.env` file and `ctrl + c` what's available in `.env.example` then `ctrl + v` into `.env` and save.

## Want to contribute?

```bash
## clone the repo
git clone https://github.com/realtouseef/valopedia.git

## move into the folder
cd valopedia

## download the necessary packages
yarn

```

## To run dev

```bash
yarn dev
```

## TODOs

- [ ] Add Weapon buddies (https://valorant-api.com/v1/buddies) by uuid (https://valorant-api.com/v1/buddies/{buddyUuid})
- [ ] Add competitive tiers (https://valorant-api.com/v1/competitivetiers) by uuid (https://valorant-api.com/v1/competitivetiers/{competitivetierUuid})
- [ ] Add Player Cards (https://valorant-api.com/v1/playercards) by uuid (https://valorant-api.com/v1/playercards/{playercardUuid})
- [ ] Add Gears (https://valorant-api.com/v1/gear) and Gear by Uuid (https://valorant-api.com/v1/gear/{gearUuid})
- [ ] Add Bundles (https://valorant-api.com/v1/bundles) and Bundle by Uuid (https://valorant-api.com/v1/bundles/{bundleUuid})
- [ ] Add Contracts (https://valorant-api.com/v1/contracts) by uuid (https://valorant-api.com/v1/contracts/{contractUuid})
- [ ] Add Sprays (https://valorant-api.com/v1/sprays) by uuid (https://valorant-api.com/v1/sprays/{sprayUuid})
- [ ] Add Game Modes (https://valorant-api.com/v1/gamemodes) by uuid (https://valorant-api.com/v1/gamemodes/{gamemodeUuid})

- [ ] Fix the Weapon page images (basically, make it more responsive)
- [ ] Fix the `TypeError: Cannot read properties of null (reading 'displayIcon')` in production in `agent/[agent].jsx`
- [ ] Avoid repeatition
- [ ] Adding more content -- basically (almost) everything that is given by the API
- [ ] Move to TypeScript

## Completed TODOs

- [x] SEO
- [x] Fix the Weapon page layout
- [x] Move to styled-components
- [x] Create a Card component which takes childrens -- Agents, weapons, seasons, etc are shown on the homepage
- [x] Cache the pages (static pages don't need to be cached)
- [x] dynamically creating pages -- `[...slug].jsx` on the pages folder
- [x] Moving main page inside a card that displays "Agents" -- when clicked on it, it goes to another page that shows every agent

- [x] Add maps
