const bcrypt = require('bcrypt');
const UserModel = require('../Models/User');
const signup = async (req, res) => {
    // Signup logic here
    res.send('Signup success');
    try {
       const { name, email, password } = req.body;
       const user = await UserModel.findOne({ email });
       if (user) {
           return res.status(409).json({ message: 'User already exists,you can login instead', success: false });
       }
       const userModel = new UserModel({ username: name, email, password });
       userModel.password = await bcrypt.hash(password, 10);
       await userModel.save();
       res.status(201).json({ message: 'User created successfully', success: true });
    } catch (error) {
       res.status(500).json({ message: 'Internal Server Error', success: false });  
    }
}
module.exports = { signup };