const express = require("express");
const router = express.Router();

//controllers
const stuffCtrs = require("../controllers/stuffController");

router.get("/", stuffCtrs.getAllStuff);

router.post("/", stuffCtrs.createThing);
router.get("/:id", stuffCtrs.getOneThing);

router.put("/:id", stuffCtrs.modifyThing);
router.delete("/:id", stuffCtrs.deleteThing);

module.exports = router;
