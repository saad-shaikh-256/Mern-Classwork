const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());


// Setting up Port
const port = 5000
app.get('/',(req,res)=>{
   res.send("Hello World from server")
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});