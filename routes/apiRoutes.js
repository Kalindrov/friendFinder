var friends = require("../data/scripts/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends.friendsArr);
  });

  app.post("/api/friends", function(req, res) {
    
    var data = req.body;
    
    var friend = {
      "name" : "name",
      "photo" : "photo",
      "scores" : []
    };

    friend.name = data.username;
    friend.photo = data.photo;
    friend.scores.push(parseInt(data.quest1));
    friend.scores.push(parseInt(data.quest2));
    friend.scores.push(parseInt(data.quest3));
    friend.scores.push(parseInt(data.quest4));
    friend.scores.push(parseInt(data.quest5));
    friend.scores.push(parseInt(data.quest6));
    friend.scores.push(parseInt(data.quest7));
    friend.scores.push(parseInt(data.quest8));
    friend.scores.push(parseInt(data.quest9));
    friend.scores.push(parseInt(data.quest10));

    friends.friendsArr.push(friend);
    
    var bestMatch = 0;
    var points = 100;

      for (var x = 0; x < friends.friendsArr.length; x++) {
        var totalDifference = 0;
        var currentFriend = friends.friendsArr[x];
      
        for (var y = 0; y < currentFriend.scores.length; y++) { 
         var firstCompare = currentFriend.scores[y];
         var secondCompare = friend.scores[y];

         totalDifference += Math.abs(firstCompare - secondCompare);
        }
        if (totalDifference < points ) {
          bestMatch = x;
          points = totalDifference;
        }
    }
    
    res.status(200).send(friends.friendsArr[bestMatch]);
  });

  app.post("/api/clear", function() {

    friends.friendsArr = [];

  });
};
