const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://chatapp:chatapp@cluster0.xgrod1q.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
