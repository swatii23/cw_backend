const { jwt } = require("../imports/module.import")

const token = (id) => {
     return jwt.sign({ userId: id }, process.env.PRIVATE_KEY);
}

module.exports = { token }