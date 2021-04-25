const express = require('express');
const router = express.Router();

const usersData = require('../data/users');

/*
 GET    SELECT
 POST   CREATE
 PUT    UPDATE
 DELETE DELETE
 */


router.get('/', (req, res) => {
    res.json(usersData);
});

router.post('/', (req, res) => {
    const user = req.body;
    user.id = usersData.length + 1;
    usersData.push(user);
    res.json(usersData);
});

router.put('/:id', (req, res) => {
    let user = usersData.filter(user => user.id == req.params.id);
    user[0].adi = req.body.adi;

    res.json(user[0]);
});

router.delete('/:id', (req, res) => {
    let data = usersData.filter(user => user.id !== Number(req.params.id));

    res.json(data);
});



module.exports = router;