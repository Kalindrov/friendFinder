var friends = require("../data/scripts/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(req.body);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
  });

  app.post("/api/clear", function() {

    friendsArr = [];

    console.log(friendsArr);
  });
};
