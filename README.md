# Mysh3ll's Clean architecture/TDD sandbox for NestJs

A very simple boilerplate to have fun with Clean architecture and TDD and experiments

### Requirements

- _With Docker_
    - make
    - docker && docker-compose
- _Without Docker_
    - node
    - npm/yarn

:arrow_right: **Note**: you could run the commands with `npm` or `make` with docker-compose. _Make_ raises the container with docker-compose, executes the task and removes the container.



## Installation

```bash
$ npm i
or
$ make install
```

## Running the app

```bash
# development
$ npm run start
or
$ make start

# watch mode
$ npm run start:dev
or
$ make start-dev

# production mode
$ npm run start:prod
or
$ make start-prod
```

## Test

```bash
# unit tests
$ npm run test
or
$ make test

# e2e tests
$ npm run test:e2e
or
$ make test-e2e

# test coverage
$ npm run test:cov
or
$ make test-cov

# test in watch mode
$ npm run test:watch
or
$ make test-watch
```

## Linter

```bash
# execute eslint fix
$ npm run lint
or
$ make lint
```

- Eslint uses mainly the `standard` and `recommended` set of rules, with few personal preferences, feel free to change it in : `.eslintrc.json` to be confortable.

:warning: **Warning**: If you execute the command `make test-watch` make sure to exit with the `q` and not with `Ctrl C`, otherwise the docker container will not be destroyed.

## Stay in touch

- Author - [@Mysh3ll](https://github.com/Mysh3ll/)
- LinkedIn - [@Michel Pompas](https://www.linkedin.com/in/michel-pompas)

## License

Nest is [MIT licensed](LICENSE).
