const moment = require("moment");
moment().format();

const Tweed = require("../models/tweed");
const tweedsController = {};

tweedsController.index = (req, res) => {
  Tweed.findAll()
    .then(tweeds => {
      res.json({
        message: "ok",
        data: { tweeds }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "400", err });
    });
};

tweedsController.show = (req, res) => {
  Tweed.findById(req.params.id)
    .then(tweed => {
      res.json({
        message: "ok",
        data: { tweed }
      });
    })
    .catch(err => {
      res.status(400).json({ message: "400", err });
    });
};

tweedsController.create = (req, res) => {
  Tweed.create({
    tweed: req.body.tweed,
    time: moment(new Date()).format(`MM/D/YYYY h:mma`)
  })
    .then(tweed => {
      res.json({ message: "ok", data: { tweed } });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "400", err });
    });
};

tweedsController.destroy = (req, res) => {
  console.log("Controller Destory", req.body.id);
  Tweed.destroy(req.body.id);
};
module.exports = tweedsController;
