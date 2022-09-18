# Valopedia

Valorant Encyclopedia

## Live Preview

Not yet deployed

## API

create a `.env` file and add `NEXT_PUBLIC_AGENTS="https://valorant-api.com/v1/agents"`

## To run dev

```bash
yarn dev
```

## TODOs

- [x] SEO
- [ ] Fix the Weapon page layout
- [ ] Fix the `TypeError: Cannot read properties of null (reading 'displayIcon')`
- [ ] Avoid repeatition
- [ ] Create a Card component which takes childrens -- Agents, weapons, seasons, etc are shown on the homepage
- [ ] Cache the pages
- [ ] dynamically creating pages -- `[...slug].jsx` on the pages folder
- [x] Moving main page inside a card that displays "Agents" -- when clicked on it, it goes to another page that shows every agent
- [ ] Adding more content -- basically (almost) everything that is given by the API
- [ ] Move to TypeScript in future
- [x] Move to styled-components
