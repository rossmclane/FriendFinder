var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function (req, res) {

    current_points = req.body.points.map(function (item) { return parseInt(item); });

    var the_one;
    var current_min = 1000;
    friends.forEach(function (friend) {
      var sum = 0;
      for (let i = 0; i < current_points.length; i++) {
        sum += Math.abs(current_points[i] - friend.points[i])
      }

      if (sum <= current_min){
        current_min = sum;
        the_one = friend;
      }
    })
    friends.push(req.body);
    res.send(the_one);
  });

};
