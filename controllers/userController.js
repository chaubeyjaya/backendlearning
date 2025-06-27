import User from '../models/userModel.js';

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//login 
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }


  res.status(200).json({
    message: 'Login successful',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

//register
export const register = async(req,res)=>{
   const { name, email,password } = req.body;
  const newUser = new User({ name, email,password });
    await newUser.save();
  res.status(201).json(newUser);

}


export const showdata = async(req,res)=>{
  const users = await User.find();
  res.json(users);
}