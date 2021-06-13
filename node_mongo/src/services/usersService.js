const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
// reqiure('dotenv').config();

const register = async (req, res) => {
    const user = { username, email, password } = req.body;
    // callback
    // Users.create(user, (err, data) => {
    //     if (err) res.status(403).json({ message: 'User could not created.', error: err });
    //     res.json(data);
    // });

    //  Promise 
    // Users.create(user)
    //     .then(data => res.json(data))
    //     .catch(err => res.status(403).json({ message: 'User could not created.', error: err }));

    // async await
    try {
        const data = await Users.create(user);
        const savedUser = data.toObject();
        delete savedUser.password;

        res.setHeader('Content-Type', 'application/json');

        return res.json(savedUser);
    } catch (err) {
        res.status(403).json({ message: 'User could not created.', error: err })
    }
};

const find = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Users.findOne({ _id: id });

        res.setHeader('Content-Type', 'application/json');

        return res.json(data);
    } catch (err) {
        res.status(403).json({ message: 'User could not found.', error: err })
    }
};

const findAll = async (req, res) => {
    try {
        const data = await Users.find();
        res.setHeader('Content-Type', 'application/json');
        delete data.password;
        return res.json(data);
    } catch (err) {
        res.status(403).json({ message: 'User could not found.', error: err })
    }
};

const remove = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Users.deleteOne({ _id: id });

        res.setHeader('Content-Type', 'application/json');

        return res.json(data);
    } catch (err) {
        res.status(403).json({ message: 'User could not found.', error: err })
    }
};

const update = async (req, res) => {
    const user = { _id, username, email, password } = req.body;

    try {
        const data = await Users.updateOne({ _id: user._id }, { $set: user });

        res.setHeader('Content-Type', 'application/json');

        return res.json(data);
    } catch (err) {
        res.status(403).json({ message: 'User could not found.', error: err })
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    let user = await Users.findOne({ username }).exec();

    if (!user) res.status(404).json({ message: 'User can\'t found' });

    if (user) {
        const validatePassword = await user.validatePassword(password);

        if (!validatePassword) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(403).send({ message: 'The password is incorrect' });
        }

        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN);

        const userData = user.toObject();
        delete userData.password;

        res.json({ token: accessToken, user: userData });
    }
}


// CRUD
module.exports = {
    register,
    find,
    findAll,
    remove,
    update,
    login
}
