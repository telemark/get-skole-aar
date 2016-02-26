'use strict'

function getSchoolYear (dato) {
  var date = dato ? new Date(dato) : new Date()
  var month = date.getMonth() + 1
  var thisYear = date.getFullYear()

  if (month > 7) {
    thisYear++
  }

  return (thisYear - 1) + '/' + thisYear
}

module.exports = getSchoolYear
