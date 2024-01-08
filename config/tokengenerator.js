const { jwt } = require("../imports/module.import")

const token = (id) => {
     return jwt.sign({ userId: id }, process.env.SECRET_KEY);
}

module.exports = { token }