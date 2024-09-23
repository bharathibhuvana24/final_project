import User from '../Model/user.model.js'

export const signup = async(req,res) =>
{
    const {username, email, password} = req.body;
    const newUser = new User({username, email, password});
    await newUser.save();
    res.json(newUser);
}