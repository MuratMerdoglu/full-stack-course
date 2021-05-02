const express = require('express');

const router = express.Router();

const usersData = require('../data/usersData');

router.get('/', (req, res) => {
    if (!req.query.userId)
        res.json(usersData);

    const userId = req.query.userId;
    const user = usersData.filter(item => item.id == userId);

    res.send(user);
});


router.post('/', (req, res) => {
    const user = req.body;
    user.id = usersData.length + 1;

    usersData.push(user);

    res.json({ data: usersData });
});

router.put('/', (req, res) => {
    const result = 'PUT istegi geldi.';

    res.send({ message: result });
});

router.patch('/', (req, res) => {
    const result = 'PATCH istegi geldi.';

    res.send({ message: result });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    const result = usersData.filter(item => item.id != id);

    res.send({ message: result });
});

module.exports = router;