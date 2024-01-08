const { asyncHandler } = require("../imports/modules.imports")
const { generateToken } = require('../imports/configs.imports')
const { UserModel } = require('../imports/models.imports')
const { mongoose, bcrypt } = require("../imports/modules.imports");

const signupController = asyncHandler(async (req, res) => {
     const { name, email, password } = req.body;

     if (!name || !email || !password) {
          res.status(400).json({msg: "Please enter all the feilds"})
     }

     const existUser = await UserModel.findOne({ email })

     if (existUser) {
          res.status(400).json({msg: "User already exists"})
     }

     const user = await UserModel.create({ name, email, password });

     if (user) {
          res.status(200).json({
               _id: user._id,
               email: user.email,
               token: generateToken(user._id)
          })
     } else {
          res.status(400).json({msg: "Feild to create the User"})
     }

})
const loginController = asyncHandler(async (req, res) => {
     const { email, password } = req.body;
     const user = await UserModel.findOne({ email });
     if (user && (await bcrypt.compare(password, user.password))) {
          res.status(200).json({
               _id: user._id,
               email: user.email,
               token: generateToken(user._id)
          });
     } else {
          console.log('Entered Password:', password);
          console.log('User Password in DB:', user ? user.password : 'User not found');

          res.status(401).json({ msg: "Invalid Email and Password" });
     }
});


module.exports = { signupController, loginController }