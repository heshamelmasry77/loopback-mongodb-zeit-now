const whitelist = ['https://room-me-front.herokuapp.com','http://room-me-front.herokuapp.com', 'https://room-me-front-staging.herokuapp.com','http://room-me-front-staging.herokuapp.com'];
module.exports = {
  "initial": {
    "cors": {
      "params": {
        "origin": function (origin, callback) {
          if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS staging'));
          }
        }
      }
    }
  }
};
