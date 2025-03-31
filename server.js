const express = require("express")

const app = express();
const PORT = 3000 ;

app.get("/" , (req , res) =>{
    res.send("welcome to the claculator api , use patameter in url to get answers")
});

app.get("/add" , (req , res) =>{
    const {num1 , num2} = req.query ;

    if (!num1 || !num2){
        return res.status(400).json({message : " parameter is missing"})
    }

    const sum = parseFloat(num1) + parseFloat(num2) ;
    res.json({result : sum});
});

// Subtraction Route
app.get("/subtract", (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) return res.status(400).json({ error: "Missing parameters" });

    const difference = parseFloat(num1) - parseFloat(num2);
    res.json({ result: difference });
});

// Multiplication Route
app.get("/multiply", (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) return res.status(400).json({ error: "Missing parameters" });

    const product = parseFloat(num1) * parseFloat(num2);
    res.json({ result: product });
});

// Division Route
app.get("/divide", (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) return res.status(400).json({ error: "Missing parameters" });

    if (parseFloat(num2) === 0) return res.status(400).json({ error: "Cannot divide by zero" });

    const quotient = parseFloat(num1) / parseFloat(num2);
    res.json({ result: quotient });
});


app.listen(PORT , ()=>{
    console.log("server is running on port 3000")
});