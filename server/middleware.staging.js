const whitelist = [
    'localhost:3000'
];
module.exports = {
  "initial": {
    "cors": {
      "params": {
        "origin": function (origin, callback) {
          console.log(origin);
          if (whitelist.indexOf(origin) !== -1  || !origin) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS staging'));
          }
        }
      }
    }
  }
};
