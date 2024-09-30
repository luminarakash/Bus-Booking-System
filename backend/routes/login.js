const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async(req, res, next) => {
    const { email, password } = req.body;
    try {
        User.findOne({ email: email }, (err, doc) => {
            console.log(doc);
            if (err) {} else {
                if (!doc) {} else {
                    bcrypt.compare(password, doc.password, function(error, response) {
                        console.log(response);
                        const token = jwt.sign({ doc }, "top_secret");
                        res.status(200).json({ token });
                    });
                }
            }
        });
    } catch (error) {}
  
});



module.exports = router;