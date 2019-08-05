const jwt = require('jsonwebtoken');

const index = (req, res) => {
    res.send('api welcome');
}

const login = (req, res) => {
    jwt.sign( {user: 'Fede'}, 
              'secretkey', 
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

const hello = (req, res) => {
    jwt.verify( req.token,
                'secretkey',
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
                'secretkey',
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
    login,
    hello,
    take
}