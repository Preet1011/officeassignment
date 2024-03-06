
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
// import authRoutes from './routes/authRoute.js'


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
mongoose.connect("mongodb://127.0.0.1:27017/officedemo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(()=>{
    console.log("connected database")
}).catch(error=>{
    console.log(error)
})

//routes
// app.use("api/v1/auth",authRoutes)
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to officedemo</h1>")
})
const Schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String
  
  })
const User=new mongoose.model("User",Schema);
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        res.send({ message: "User ALREADY registered" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        await newUser.save();
        res.send({ message: "Registered successfully" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error occurred" });
    }
  });
  app.post("/login", async (req, res) => {
    const { email,  password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        console.log(user.email,email,user.password,password);
        if(user.email===email && user.password===password ){
          res.send({ message: "Login Successfully" });
        }else{
          res.send({ message: "invalid data" });
          
        }
      }
      else{
        res.send({ message: "user not exist " });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error occurred" });
    }
  });
app.listen(4000,()=>{
    console.log("server started on 4000")
})



