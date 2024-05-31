# Docs

## Installation

```bash
yarn
```

## Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```

## DB

```bash
cp .env.eexample .env
```

```bash
docker compose up -d
```

## Drizzle

### generate
```bash
yarn drizzle-kit generate --name ...
```

### push
```bash
yarn drizzle-kit push
```

### drop
```bash
yarn drizzle-kit drop
```

### studio
```bash
yarn drizzle-kit studio
```
