var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};
var client = webdriverio.remote(options);

client
  .init()
  .url('https://frontendmasters.com/login/')
  .setValue('#username', 'nhquocvinh')
  .setValue('#password', '08041990')
  .click('button[type=submit]')
  .getTitle().then(function (title) {
    console.log('Title is: ' + title);
  })
  .url('https://frontendmasters.com/courses/javascript-hard-parts/')
  .getTitle().then(function (title) {
    console.log('Title is: ' + title);
  })
  .elements('section').then(function (res) {
    console.log(res);

    browser.elements(res[1]).then(function (sec) {
      console.log(sec);
    });
  })
  ;
