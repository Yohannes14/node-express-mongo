const express = require("express");
const {
  getAllStuff,
  createThing,
  getOneThing,
  modifyThing,
  deleteThing,
} = require("../controllers/stuffController");
const auth = require("../middleware/auth");

//middleware for multer
const multer = require("../middleware/multer-config");
const router = express.Router();

//controllers
// const stuffCtrs = require("../controllers/stuffController");

router.get("/", auth, getAllStuff);

router.post("/", auth, multer, createThing);
router.get("/:id", auth, getOneThing);

router.put("/:id", auth, multer, modifyThing);
router.delete("/:id", auth, deleteThing);

module.exports = router;
