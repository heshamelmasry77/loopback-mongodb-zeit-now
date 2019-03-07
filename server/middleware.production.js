const whitelist = ['https://room-me-front.herokuapp.com','http://room-me-front.herokuapp.com','https://www.roome.co.za','http://www.roome.co.za','http://roome.co.za','https://roome.co.za','https://roome-front-nextjs-pcnrk93x7.now.sh'];
module.exports = {
  "initial": {
    "cors": {
      "params": {
        "origin": function (origin, callback) {
          if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS'));
          }
        }
      }
    }
  }
};
