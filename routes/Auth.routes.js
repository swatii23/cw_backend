const { signupController, loginController } = require("../imports/controllers.imports");
const { express } = require("../imports/modules.imports")

const authRoutes = express.Router();

authRoutes.post('/login', loginController);  
authRoutes.post('/signup', signupController);


module.exports = { authRoutes }