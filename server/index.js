const app = require("./app")
const UserRoutes = require("./routes/user")

// APP ROUTES
app.use("/user", UserRoutes)

const port = process.env.PORT || 5000

//Connecting to Server
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})



