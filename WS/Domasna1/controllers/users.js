const NewUserRecord = require('../models/users');

module.exports = {
    postRegistering: async (req, res) => {
        const newUserRecord = await NewUserRecord.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
        res.send(newUserRecord);
    },
    postLoging: async (req, res) => {
        if (await NewUserRecord.findOn({ email: req.body.email, password: req.body.password })) {
            res.send('OK');
        } else {
            res.send('Cela da e!');
        }

    }
}