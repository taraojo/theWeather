# The Weather in Walsall
This project is a basic AngularJS web application that gets and displays the weather in Walsall using
the [Yahoo! weather](https://developer.yahoo.com/weather/) api and set up with the
[angular-seed](https://github.com/angular/angular-seed) application skeleton.

## Installation
Clone the repo and install the dependencies.

### Prerequisites
- [Git](http://git-scm.com/)
- [Node.js and npm](http://nodejs.org/)


### Install Dependencies

Angular-seed is preconfigured with `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  This adds 2 new folders to project:

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files



### Run the Application

Angular-seed is preconfigured with a simple development web server.  Start with:

```
npm start
```

Then browse to the app at `http://localhost:8000/app/index.html`.


### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], which are run with the [Karma Test Runner][karma].

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

Run the unit tests with the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.

You can also ask Karma to do a single run of the tests and then exit. The project contains a
predefined script to do this:

```
npm run test-single-run
```
