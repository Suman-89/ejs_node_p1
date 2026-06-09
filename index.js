import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = dotenv.config();
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));




app.get("/",(req,res)=>{
    res.render("index");
})


app.get("/about",(req,res)=>{
    res.render("about");
})

const PORT = process.env.PORT || 4321;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
