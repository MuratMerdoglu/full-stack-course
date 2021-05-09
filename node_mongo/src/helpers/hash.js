const bcrypt = require('bcryptjs');

const hash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), (err, hash) => {
        if (err) throw err;
        password = hash;
    })
};

module.exports = hash;