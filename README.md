## Description
Auth server for IEEE website

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Modules
The auth module has the custom decorator for public end points `SkipAuth` see the login endpoint for example usage

The decorator is defined in auth/decorators

The validation occurs in the auth guard and returns a JWT token on successful authentication

## What needs to be done
- [ ] Integrate database for storing users (TypeORM or Sequelize come to mind)
- [ ] Sign up endpoint which inserts users into database mentioned above
- [ ] Add the rest of the modules here
- [ ] Docker Compose for testing environment
