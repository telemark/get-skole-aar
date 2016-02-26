[![Build Status](https://travis-ci.org/telemark/get-skole-aar.svg?branch=master)](https://travis-ci.org/telemark/get-skole-aar)
[![Coverage Status](https://coveralls.io/repos/telemark/get-skole-aar/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/get-skole-aar?branch=master)
[![Code Climate](https://codeclimate.com/github/telemark/get-skole-aar/badges/gpa.svg)](https://codeclimate.com/github/telemark/get-skole-aar)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# get-skole-aar
Returns school year

## Installation

From npm

```sh
$ npm install --save get-skole-aar
```

From GitHub

```sh
$ git clone git@github.com:telemark/get-skole-aar.git
```

cd into directory and run setup

```sh
$ npm run setup
```


## Usage

```javascript
'use strict'

var getSchoolYear = require('get-school-year')

console.log(getSchoolYear('2016-02-01')) //=> 2015/2016

console.log(getSchoolYear('2016-08-15')) //=> 2016/2017

console.log(getSchoolYear('2015-04-01')) //=> 2014/2015
```

## License
[MIT](LICENSE)