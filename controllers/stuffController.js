const Thing = require("../models/thing");
const fs = require("fs");

const createThing = (req, res, next) => {
  // for image
  const url = req.protocol + "://" + req.get("host");

  req.body.thing = JSON.parse(req.body.thing);
  const thing = new Thing({
    title: req.body.thing.title,
    description: req.body.thing.description,
    imageUrl: url + "/images/" + req.file.filename,
    price: req.body.thing.price,
    userId: req.body.thing.userId,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

const getOneThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id,
  })
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

const modifyThing = (req, res, next) => {
  let thing = new Thing({ _id: req.params._id });
  if (req.file) {
    // for image
    const url = req.protocol + "://" + req.get("host");

    req.body.thing = JSON.parse(req.body.thing);
    thing = {
      _id: req.params.id,
      title: req.body.thing.title,
      description: req.body.thing.description,
      imageUrl: url + "/images/" + req.file.filename,
      price: req.body.thing.price,
      userId: req.body.thing.userId,
    };
  } else {
    thing = {
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId,
    };
  }
  Thing.updateOne({ _id: req.params.id }, thing)
    .then(() => {
      res.status(201).json({
        message: "Thing updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

const deleteThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id }).then((thing) => {
    if (!thing) {
      return res.status(404).json({
        error: new Error("No such Thing"),
      });
    }
    if (thing.userId !== req.auth.userId) {
      return res
        .status(401)
        .json({ error: new Error("Unauthorized request!") });
    }
    // this is fs  to access to functions that allow you to modify file system
    const filename = thing.imageUrl.split("/images/")[1];
    fs.unlink("images/" + filename, () => {
      Thing.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            message: "Deleted!",
          });
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    });
  });
};

const getAllStuff = (req, res, next) => {
  Thing.find()
    .then((things) => {
      res.status(200).json(things);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

module.exports = {
  createThing,
  getAllStuff,
  getOneThing,
  deleteThing,
  modifyThing,
};
