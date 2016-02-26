'use strict'

var tap = require('tap')
var getSchoolYear = require('../index')

tap.equal(getSchoolYear('2016-02-10'), '2015/2016', 'It returns expected result for 2016-02-01')

tap.equal(getSchoolYear('2016-08-01'), '2016/2017', 'It returns expected result for 2016-08-01')

tap.equal(getSchoolYear('2015-04-01'), '2014/2015', 'It returns expected result for 2015-04-01')
