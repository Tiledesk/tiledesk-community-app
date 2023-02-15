require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

const templates = require("./templatesRoute");
const templatesRoute = templates.router;
app.use("/chatbots", templatesRoute);


mongoose.connect(process.env.mongoUrl, { "useNewUrlParser": true, "autoIndex": false }, async (err) => {
  if (err) { 
    console.error('(Tilebot) Failed to connect to MongoDB on ' + process.env.mongoUrl + " ", err);
  }
  else {
    const port = process.env.PORT || 3000;
    app.listen(port, function () {
      console.log('Tiledesk Community app listening on port ', port);
    });
  }
});




  
