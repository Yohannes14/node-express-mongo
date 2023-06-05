const express = require("express");
const { errorHandler } = require("./middleware/error");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/product", require("./routes/productRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));
