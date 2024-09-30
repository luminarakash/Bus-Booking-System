var express = require('express');
var router = express.Router();
var bus = require('../models/Buses');


router.post('/', (req, res) => {

    bus.find({ 'startCity': req.body.startCity, 'destination': req.body.destination }).exec((err, bus) => {
        if (err) {
            res.json({ status: false, message: "error while searching" })
        }
        else res.json({ bus })
    })
})

router.post('/', (req, res) => {

    bus.findOne({ _id: req.body.bId }, (err, bus) => {
        if (err) {
            res.json({ status: false, message: "error while searching with ID" })
        }
        else
            res.json({ bus })
    })
})

// router.post('/', (req, res) => {
//     let newBus = new bus(req.body)
//     newBus.save((err, bus) => {
//         if (err) console.log(err)
//         else res.status(201).json(bus)
//     })
// })
















module.exports = router;
