var Nightmare = require('nightmare');
var vo = require('vo');

vo(function* () {
  var nightmare = Nightmare({ show: true });
  var link = yield nightmare
    .goto('http://facebook.com')
     .type('input[name="email"]', '')
     .wait(1000)
    .type('input[name="email"]', 'tha_chookes@hotmail.com')
    .type('input[name="pass"]', '1129700071976')
    
    .click('input[type="submit"]')
    .wait(1000)
    
    .goto('http://facebook.com/me')
     .wait(1000)
    .click('._5qto')
    .wait(1000)
    .type('.5rpu', 'test nightmareJS by koy bank dear group TESTER')
    .click('div[class="_3xen _5hd5"]')
    .type('input[type="text"]', 'WT Pimsiri')
     
     .wait(1000)
     .click('button[class="_1mf7 _4jy0 _4jy3 _4jy1 _51sy selected _42ft"]')

    .evaluate(function () {
      return document.getElementsByClassName('ac-21th')[0].href;
    });
  yield nightmare.end();
  return link;
})(function (err, result) {
  if (err) return console.log(err);
  console.log(result);
});