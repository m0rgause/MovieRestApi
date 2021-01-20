
## TODO

- [x] Home
- [x] List Series
- [x] List Movies
- [x] Detail Series
- [x] Detail Movies
- [x] Search

## Usage

1. Clone this repository

```bash
git clone https://github.com/kiki-af/MovieRestApi.git
```

2. Install packages (use `yarn` or `npm`)

```bash
npm install
```

3. Start server

- a. Production

```bash
npm run start
```

- b. Development

```bash
npm run dev
```

## API Documentation

**API Version** : v1

| Endpoint             | Params                     | Description                    |
| -------------------- | -------------------------- | ------------------------------ |
| /                    | -                          | Homepage                       |
| /series/page/:page   | page : Int                 | List Series                    |
| /movie/page/:page    | page : Int                 | List Movies                    |
| /series/:id          | id : String                | Detail Series                  |
| /movies/:id          | id : String                | Detail Movies                  |
| /search/:query/:page | query : String, page : Int | Search movies or series        |

