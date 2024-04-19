const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
const path = require ("path")
const collection=require("./db/conn")
const hbs=require("hbs")



const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path)); 
app.set("view engine","hbs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/", (req , res) => {
    res.render("index")
});

app.get("/login", (req , res) => {
    res.render("login")
});

app.get("/register", (req , res) => {
    res.render("register")
}); 

app.get("/category", (req , res) => {
    res.render("category")
});

app.get("/level2", (req , res) => {
    res.render("level2")
}); 

app.get("/scene1", (req , res) => {
    res.render("scene1")
});

app.get("/level3", (req , res) => {
    res.render("level3")
});

app.get("/level4", (req , res) => {
    res.render("level4")
});

app.get("/level5", (req , res) => {
    res.render("level5")
});

app.get("/level6", (req , res) => {
    res.render("level6")
});

app.get("/aboutus", (req , res) => {
    res.render("aboutus")
});

app.get("/rules", (req , res) => {
    res.render("rules")
});
app.get("/contact", (req , res) => {
    res.render("contact")
});



app.post("/register",async(req , res) => {
    const data = {
        username : req.body.username,
        email :req.body.email,
        password : req.body.password
    }
    await collection.insertMany([data])

    res.render("category")
    
})


app.post("/login",async(req , res) => {
   try{
    const check=await collection.findOne({username:req.body.username})
if(check.password===req.body.password)
{
    res.render("category")
}
   else{
    res.send("wrong password")
   }
   }
   catch{
        res.send("wrong deatils")
   }
})
app.listen(port , () => {
    console.log(`server is running at port no ${port}`);
});