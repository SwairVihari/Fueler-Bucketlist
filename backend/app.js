const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middleware/error")
const path = require("path")

app.use(express.json())
app.use(cookieParser())

//  Route Imports
const test = require("./routes/testRoute")
const user = require("./routes/userRoute") 
app.use("/api/v1", test)
app.use("/api/v1", user)

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});



// Middleware for Errors
app.use(errorMiddleware)


module.exports = app