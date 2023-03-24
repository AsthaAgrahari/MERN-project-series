const express=require("express");
const notes=require("./data/notes");
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const noteRoutes =require("./routes/noteRoutes");
const userRoutes =require('./routes/userRoutes')
const { errorHandler, notFound }=require("./middlewares/errorMiddleware");
const path=require("path");

dotenv.config();
connectDB();
const app=express();
app.use(express.json());



app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

__dirname=path.resolve();
if(process.env.NODE_ENV==='production') {
app.use(express.static(path.join(__dirname,'/frontend/build')));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'frontend','build',"index.html"));
});
}else{
    app.get("/",(req,res)=>{
        res.send("API is running..");
    });
}

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));