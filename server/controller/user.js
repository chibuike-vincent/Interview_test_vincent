const User = require('../models/user')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//SIGNUP CONTROLLER
exports.signUp = async (req, res) => {
  const{name,username,password} = req.body;
try {
    if(!name || !username || !password){
        return res.json({error:'all fields are required please'})
    }
     const savedUser = await User.findOne({username})
    
         if(savedUser){
            return res.json({error:"user with the username already exist"})
         }
         const encryptPassword = await bcrypt.hash(password,10)
       
        const user = await User.create({name,username,password:encryptPassword})
        if(user){
            return res.status(200).json({message:"Signup successfully",user:user})
        }else{
            return res.send("Unable to save user")
        }
} catch (error) {
    console.log(error)
}
  
}
    
// signin route controller
exports.signIn = async (req, res) => {
  const Secret = process.env.AUTH_SECRET
  const{username,password}= req.body
  if(!username || !password){
   return   res.json({error:"all fields are required please"})
  }
try {
    const savedUser = await User.findOne({username})
  if(!savedUser){
    return  res.json({error:"invalid username"})
  }
 const comparePassword =  bcrypt.compare(password,savedUser.password)
 if(comparePassword){
    const token =   jwt.sign({id:savedUser._id},Secret)
   return res.status(200).json({token,savedUser})
 }else{
    return  res.json({error:"invalid password"}) 
}
    
} catch (error) {
    console.log(error)
}
};

// signin route controller
exports.getDrugs = (req,res)=>{
return res.status(200).send(["Acetaminophen","Ativan","Atorvastatin","Azithromycin","paracetamol"])
}




