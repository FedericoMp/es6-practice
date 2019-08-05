const jwt = require('jsonwebtoken');
const secret = require('../utils/config');

// Endpoints
const index = (req, res) => {
    res.send('api welcome');
}

const token = (req, res) => {
    let usr = {
        'id': 'J1c2VyIjoJIUzI1NiIsInR5',
        'name': 'Fede'
    };
    // sign the usr data with secret key con utils/config file
    jwt.sign( {usr}, 
              secret.key, 
              //{expiresIn: '30s'},
              (err, token) => {
                  if (err) {
                    console.log(err);
                    res.send(403);
                  } else {
                      res.json({token});
                  }
              });
}

// --------------------------------------------------------------
// Once the data was tokenized, we must use jwt.verify() with [secret-key] and req.token => (returned from) middleware
// actions defined on router, middleware loads on router
// hello and take => decode data with token returned from middleware
const hello = (req, res) => {
    jwt.verify( req.token,
                secret.key,
                (err, authData) => {
                    if (err) {
                        console.log(err);
                        res.send(403);
                    } else {
                        res.json({msg: 'index con router', authData});
                    }
                });
}

const take = (req, res) => {
    jwt.verify( req.token,
                secret.key,
                (err, authData) => {
                    if (err) {
                        console.log(err);
                        res.send(403);
                    } else {
                        res.json({msg: 'index take', authData});
                    }
                });
}

module.exports = {
    index,
    token,
    hello,
    take
}