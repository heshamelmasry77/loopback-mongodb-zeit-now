const whitelist = ['https://room-me-front.herokuapp.com','http://room-me-front.herokuapp.com','https://www.roome.co.za','http://www.roome.co.za','http://roome.co.za','https://roome.co.za','http://room-me-front-staging.herokuapp.com','https://room-me-front-staging.herokuapp.com','http://localhost:3000'];

const ALLOWED_HOSTS = ['https://room-me-front.herokuapp.com','http://room-me-front.herokuapp.com','https://www.roome.co.za','http://www.roome.co.za','http://roome.co.za','https://roome.co.za','http://room-me-front-staging.herokuapp.com','https://room-me-front-staging.herokuapp.com','http://localhost:3000'];
module.exports = {
  "initial": {
    "cors": {
      "params": {
        "origin": function(req, origin, callback) {

          // note: if same origin makes requests with origin header, it needs to be whitelisted

          if (whitelist.indexOf(origin) !== -1) {
            console.log('first',origin);

            callback(null, true);
          } else if (origin === undefined && ALLOWED_HOSTS.indexOf(req.header.host)) {
            console.log('second',origin);

            callback(null, true);
          } else {
            // callback(null, true)
            callback(new Error(`${origin} not allowed by CORS`));
          }
        }
      }
    }
  }
};
