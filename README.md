# Mysh3ll's TDD sandbox for NestJs

A very simple boilerplate to have fun with TDD and experiments

### Requirements

- _With Docker_
    - make
    - docker && docker-compose
- _Without Docker_
    - node
    - npm/yarn

:arrow_right: **Note**: you could run the commands with `npm` or `make` with docker-compose. _Make_ raises the container with docker-compose, executes the task and removes the container.

### Main scripts

:arrow_right: **Obvious Note**: require to install dependencies
```shell
npm i
or
make install
```

- **execute all tests files once** 
```shell
npm run test
or
make test
```

- **execute all tests files** (_impacted by changes_) **in watch mode** (a.k.a. on save) 
```shell
npm run test:watch
or
make test-watch
```

### Linter

- Eslint uses mainly the `standard` and `recommended` set of rules, with few personnal preferences, feel free to change it in : `.eslintrc.json` to be confortable.

- **execute eslint check** 
```shell
npm run eslint:check
or
make eslint-check
```

- **execute eslint fix** 
```shell
npm run eslint:fix
or
make eslint-fix
```

:warning: **Warning**: If you execute the command `make test-watch` make sure to exit with the `q` and not with `Ctrl C`, otherwise the docker container will not be destroyed.
