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

### MVT pages

In a separate terminal session, execute the tests in the checked out repository:

```sh
yarn testcafe chrome test/test.js
```

### Real pages

First, build the relevant code normally (`yarn build`), then copy all files in `.../target/dist` to `html`
directory in the checked out repository.

```sh
cd [masked]
yarn build
rsync -a [masked]/target/dist/ [clonedrepo]/html/
```

Then run the tests using the separate special test:

```sh
yarn testcafe chrome test/test-real.js
```
