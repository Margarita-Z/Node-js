const NewUserRecord = require('../models/users');

module.exports = {
    postRegistering: async (req, res) => {
        const newUserRecord = await NewUserRecord.create(
            newUserRecord.push(req.body)
            );

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