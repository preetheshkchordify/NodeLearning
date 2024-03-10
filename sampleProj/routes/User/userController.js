const User = require('../../models/user')

async function handleGetUsers(req,res) {
    const allUser = await User.find({})
    return res.json(allUser)
}

module.exports = {
    handleGetUsers
}