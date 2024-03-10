const express = require('express');
const {handleGetUsers} = require('./userController')
const router = express.Router();

router.get("/", handleGetUsers);

app.route('/api/v1/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .put((req,res) => {
        const id = Number(req.params.id)
        const userIndex = users.findIndex((user) => user.id === id);
        const {first_name,email} = req.body;

        if (userIndex !== -1) {
            users[userIndex].first_name = first_name;
            users[userIndex].email = email;
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (error) => {
                if (error) {
                    return res.status(500).json({ error: 'Error writing to file' });
                }
                return res.json(users[userIndex]);
            });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    })
