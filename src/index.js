import dotenv from "dotenv"
import connectDB from "./db/db.js";


dotenv.config({
path:'./env'
})


connectDB()
.then(()=>{

    app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
    })

    app.listen(process.env.PORT||8000,()=>{
        console.log(`server up at : ${process.env.PORT}`)
    })
})
.catch((err)=>{
console.log("MONGODB connection failed: ",err)
})





