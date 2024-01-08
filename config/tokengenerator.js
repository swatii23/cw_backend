const { jwt } = require("../imports/modules.imports")

const token = (id) => {
     return jwt.sign({ userId: id }, process.env.SECRET_KEY);
}

module.exports = { token }