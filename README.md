# Valopedia 👾

Valorant Encyclopedia

## Live Preview

Not yet deployed — error is occuring
![Error is occuring while deploying to vercel](/public/md-images/error.jpeg)

## API

Please refer to the `.env.example`

create a `.env` file and `ctrl + c` what's available in `.env.example` then `ctrl + v` into `.env` and save.

## To run dev

```bash
yarn dev
```

## TODOs

- [ ] Fix the Weapon page images (basically, make it more responsive)
- [ ] Fix the `TypeError: Cannot read properties of null (reading 'displayIcon')` in production
- [ ] Avoid repeatition
- [ ] Adding more content -- basically (almost) everything that is given by the API
- [ ] Move to TypeScript in future

## Completed TODOs

- [x] SEO
- [x] Fix the Weapon page layout
- [x] Move to styled-components
- [x] Create a Card component which takes childrens -- Agents, weapons, seasons, etc are shown on the homepage
- [x] Cache the pages (static pages don't need to be cached)
- [x] dynamically creating pages -- `[...slug].jsx` on the pages folder
- [x] Moving main page inside a card that displays "Agents" -- when clicked on it, it goes to another page that shows every agent
