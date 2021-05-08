module.exports = () => {
  if (typeof localStorage === 'undefined' || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
    if (
      localStorage.getItem('currentQueue') === null
      || localStorage.getItem('currentQueue') === ''
      || !localStorage.getItem('currentQueue')
      || typeof localStorage.getItem('currentQueue') === 'undefined' 
    ) {
      localStorage.setItem('currentQueue', JSON.stringify({}));
    }
  }
};
