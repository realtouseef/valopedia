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

## ERROR

Apparently getting `pre-render` error for the `[agent].tsx`

**A bit about the errors:**
The API has 2 `Sova`, one with `isPlayableCharacter = true` and the other one with `false`, and we are fetching the one with `true` because it has all the data available.
Error is occuring because

- NextJS is creating static pages for every agent and the `Sova` with `false` is being returned but with no data -- something like that.
- running fine on `local` but when pushed to `vercel` or `yarn build`, the error occurs.

## Priority TODOs

- [ ] Adding more content -- basically (almost) everything that is given by the API

## Working on TODOs

## TODOs

- [ ] Add Bundles (https://valorant-api.com/v1/bundles) and Bundle by Uuid (https://valorant-api.com/v1/bundles/{bundleUuid})
- [ ] Add Contracts (https://valorant-api.com/v1/contracts) by uuid (https://valorant-api.com/v1/contracts/{contractUuid})
- [ ] Add Sprays (https://valorant-api.com/v1/sprays) by uuid (https://valorant-api.com/v1/sprays/{sprayUuid})
- [ ] Add Game Modes (https://valorant-api.com/v1/gamemodes) by uuid (https://valorant-api.com/v1/gamemodes/{gamemodeUuid})

- [ ] Fix the Weapon page images (basically, make it more responsive)
- [ ] Avoid repeatition

## Future TODOs

- [ ] Added Player Cards (https://valorant-api.com/v1/playercards) -- might add player cards by uuid (https://valorant-api.com/v1/playercards/{playercardUuid})

## Completed TODOs

- [x] Add Gears (https://valorant-api.com/v1/gear) and Gear by Uuid (https://valorant-api.com/v1/gear/{gearUuid})
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

- [x] `TypeError: Cannot read properties of null (reading 'default')` is the `Sova` with `isPlayableCharacter = false` id: `/agent/ded3520f-4264-bfed-162d-b080e2abccf9` — possible fix is to use ternary operator
- [x] Add competitive tiers (https://valorant-api.com/v1/competitivetiers) by uuid (https://valorant-api.com/v1/competitivetiers/{competitivetierUuid}) -- not adding buddies by uuid because same content
- [x] Add Weapon buddies (https://valorant-api.com/v1/buddies) -- not adding buddies by uuid because same content.
