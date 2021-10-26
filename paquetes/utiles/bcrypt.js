const bcrypt = require('bcrypt');

//Hashed string

const password = 'victor1@';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare('victor1@', hash, (err, res) => {
        console.log(res);
    });
});

