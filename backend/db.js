const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/classroom-server");

// mongoose.connect(process.env.DB_URL)
mongoose.connection.on("connected", () => {
  console.log("Connection established");
});
mongoose.connection.on("error", (err) => {
  console.log("Error Connecting:", err);
});

module.exports = mongoose;
