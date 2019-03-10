const whitelist = ['https://room-me-front.herokuapp.com','http://room-me-front.herokuapp.com','https://www.roome.co.za','http://www.roome.co.za','http://roome.co.za','https://roome.co.za','http://room-me-front-staging.herokuapp.com','https://room-me-front-staging.herokuapp.com'];
module.exports = {
  "initial": {
    "cors": {
      "params": {
        "origin": function (req,origin, callback) {
          console.log(origin);
          console.log(req);
          if (origin === undefined || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS production'));
          }
        }
      }
    }
  }
};
