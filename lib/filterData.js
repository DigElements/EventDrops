"use strict";
/* global module */

module.exports = function filterData(data, scale) {
  data = data || [];
  var filteredData = [];
  var boundary = scale.range();
  var min = boundary[0];
  var max = boundary[1];
  var count = 0;

  data.forEach(function (datum) {
    var value = scale(datum.date);
    if (value < min || value > max) {
      return;
    }
    count += datum.count;
    filteredData.push(datum);
  });

  return {
    count: count,
    dates: filteredData
  };
};
