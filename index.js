const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/error");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const stuffRoutes = require("./routes/stuffRoutes");

const port = process.env.PORT || 3000;

const app = express();

connectDB();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/stuff", stuffRoutes);
// app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));
