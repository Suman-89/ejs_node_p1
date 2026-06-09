import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { title } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = dotenv.config();
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.render("index");
})


app.get("/about",(req,res)=>{
    res.render("about",{title:"About Us",message:"This is the about page"});
})

// route for form page
app.get("/form",   (req,res)=>{
    res.render("form",{title:"Form Page",message:null});
});

app.post("/submit",(req,res)=>{
    const name = req.body.name;
    // console.log(`Form submitted with name: ${name}`);
    res.render("form", { title: "Form Page", message: `Form submitted successfully! Name: ${name}` });
});

const PORT = process.env.PORT || 4321;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
