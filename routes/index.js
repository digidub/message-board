var express = require('express');
var router = express.Router();

const messages = [
  { text: 'Hi there!', user: 'Armando', added: new Date() },
  { text: 'Hello World!', user: 'Charles', added: new Date() },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Messageboard' });
});

router.post('/new', function (req, res) {
  const name = req.body.name;
  const messageText = req.body.message;
  messages.push({ text: messageText, user: name, added: new Date() });
  res.redirect('/');
});

module.exports = router;
