# Valopedia 👾

Valorant Encyclopedia — where you will find everything about Valorant; from weapons, agents, to players.

## Live Preview

https://valopedia.vercel.app

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

## Priority TODOs

- [ ] Adding more content -- basically (almost) everything that is given by the API

## Working on TODOs

- [ ] Add competitive tiers (https://valorant-api.com/v1/competitivetiers) by uuid (https://valorant-api.com/v1/competitivetiers/{competitivetierUuid})

## TODOs

- [ ] Add Player Cards (https://valorant-api.com/v1/playercards) by uuid (https://valorant-api.com/v1/playercards/{playercardUuid})
- [ ] Add Gears (https://valorant-api.com/v1/gear) and Gear by Uuid (https://valorant-api.com/v1/gear/{gearUuid})
- [ ] Add Bundles (https://valorant-api.com/v1/bundles) and Bundle by Uuid (https://valorant-api.com/v1/bundles/{bundleUuid})
- [ ] Add Contracts (https://valorant-api.com/v1/contracts) by uuid (https://valorant-api.com/v1/contracts/{contractUuid})
- [ ] Add Sprays (https://valorant-api.com/v1/sprays) by uuid (https://valorant-api.com/v1/sprays/{sprayUuid})
- [ ] Add Game Modes (https://valorant-api.com/v1/gamemodes) by uuid (https://valorant-api.com/v1/gamemodes/{gamemodeUuid})

- [ ] Fix the Weapon page images (basically, make it more responsive)
- [ ] Avoid repeatition

## Completed TODOs

- [x] SEO
- [x] Move to TypeScript
- [x] Fix the `TypeError: Cannot read properties of null (reading 'displayIcon')` in production in `agent/[agent].jsx`
- [x] Fix the Weapon page layout
- [x] Move to styled-components
- [x] Create a Card component which takes childrens -- Agents, weapons, seasons, etc are shown on the homepage
- [x] Cache the pages (static pages don't need to be cached)
- [x] dynamically creating pages -- `[...slug].jsx` on the pages folder
- [x] Moving main page inside a card that displays "Agents" -- when clicked on it, it goes to another page that shows every agent
- [x] Add maps
- [x] `maps/ee613ee9-28b7-4beb-9666-08db13bb2244` error is `The Range` and doesn't have a `displayIcon` — possible fix is to use ternary operator
- [x] **FIX THE DEPLOYMENT ERROR BEFORE ANYTHING ELSE.**

- [x] Add Weapon buddies (https://valorant-api.com/v1/buddies) -- not adding buddies by uuid because same content.
- [x] `TypeError: Cannot read properties of null (reading 'default')` is the `Sova` with `isPlayableCharacter = false` id: `/agent/ded3520f-4264-bfed-162d-b080e2abccf9` — possible fix is to use ternary operator
