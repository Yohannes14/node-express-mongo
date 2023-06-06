const express = require("express");
const {
  getAllStuff,
  createThing,
  getOneThing,
  modifyThing,
  deleteThing,
} = require("../controllers/stuffController");
const auth = require("../middleware/auth");
const router = express.Router();

//controllers
// const stuffCtrs = require("../controllers/stuffController");

router.get("/", auth, getAllStuff);

router.post("/", auth, createThing);
router.get("/:id", auth, getOneThing);

router.put("/:id", auth, modifyThing);
router.delete("/:id", auth, deleteThing);

module.exports = router;
