'use strict';

function assign(target, ...sources) {
  sources.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        target[key] = obj[key];
      })
    }
  });
  return target;
}
