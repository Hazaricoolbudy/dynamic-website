const express = require("express");
const path=require('path');
const app = express();
let port = process.env.PORT || 8000;
// public static path
const staticPath=(path.join(__dirname,'../public'))
// console.log(path.join(__dirname)})

app.use(express.static(staticPath));


//routing
app.get("/", (req, res) => {
  res.send("welcome to weather app");
});
app.get("/about", (req, res) => {
  res.send("welcome to about");
});
app.get("/weather", (req, res) => {
  res.send("welcome to weather");
});
app.get('*',(req, res)=>{
    res.send('welcom to error page')
})
app.listen(port, () => {
  console.log(`we use port no ${port}`);
});
