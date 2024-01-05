const { jwt } = require("../imports/modules.imports")

const token = (id) => {
     return jwt.sign({ userID: id }, process.env.PRIVATE_KEY);
}

module.exports = { token }