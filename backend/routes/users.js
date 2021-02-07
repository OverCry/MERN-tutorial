const router = require('express').Router();
let User = require('../models/user.model'); //the mongoose model createad

//if a get request at host/users/ on a get request, then
router.route('/').get((req, res) => {
  User.find() //returns a promise
    .then(users => res.json(users)) //res.json returns in a json format
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;