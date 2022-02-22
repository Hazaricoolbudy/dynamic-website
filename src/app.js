const express = require("express");
const path=require('path');
const hbs=require('hbs');
const app = express();
let port = process.env.PORT || 8000;
// public static path
const staticPath=(path.join(__dirname,'../public'));
const template_path=(path.join(__dirname,'../template/views'));
console.log(template_path);
const partials_path=(path.join(__dirname,'../template/partials'));
console.log(partials_path);
// console.log(path.join(__dirname)})

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path)

app.use(express.static(staticPath));


//routing
app.get("", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
  res.render('about')
});
app.get("/weather", (req, res) => {
  res.render('weather')
});
app.get('*',(req, res)=>{
    res.render('error404',
    {
      errmsg:"Opps Page not found"
    })
})
app.listen(port, () => {
  
});
