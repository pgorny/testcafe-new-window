# Quick test of post-testcafe 1.17.0 behaviour w.r.t new window links

## Clone the repository with the example

```sh
git clone https://github.com/pgorny/testcafe-new-window
```

Change the current directory to the checked out repository.

## Install dependencies

In the checked out repository, run:

```sh
yarn install
```

## Start serving pages

In the checked out repository, run:

```sh
yarn serve html
```

## Run tests

In a separate terminal session, execute the tests in the checked out repository:

```sh
yarn testcafe chrome test/test.js
```
