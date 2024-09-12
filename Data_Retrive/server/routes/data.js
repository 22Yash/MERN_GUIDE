const express = require('express');
const router = express.Router();
const Data = require('../model/dataModel'); // Import the correct model

// Home route
router.get('/', (req, res) => {
    console.log("home");
    res.send("Welcome to the home page!");
});

// Data route
router.post('/data', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ err: "Please fill all the details" });
    }

    try {
        const userExist = await Data.findOne({ email: email });  // Use the correct model

        if (userExist) {
            return res.status(422).json({ error: "User already exists for this email" });
        }

        const user = new Data({  // Use the correct model
            name,
            email,
            password
        });

        await user.save();
        res.status(201).json({ message: "User created successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router
