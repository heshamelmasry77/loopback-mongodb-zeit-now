const whitelist = ['http://localhost:3000'];
module.exports = {
  "initial": {
    "cors": {
      "params": {
        "origin": function (origin, callback) {
          console.log(origin);
          if(origin === undefined){
            callback(null, true);
          }
          else if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS production'));
          }
        }
      }
    }
  }
};
