'use strict';

var data = [['01:00', 5], ['01:20', 6], ['01:50', 5], ['02:30', 7]];

data = data.map((t) =>  [new Date('2016-01-01T' + t[0]), t[1]]);
