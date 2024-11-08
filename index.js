const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route")
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false})) // usar por forms

//routes
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
  res.send("hello from node API");
});

mongoose
  .connect(
    "mongodb+srv://gabriellapa2001:yQqjbC9rxdg9SvXp@simple-crud-api.8wfoa.mongodb.net/?retryWrites=true&w=majority&appName=SIMPLE-CRUD-API"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Conection failed"));
