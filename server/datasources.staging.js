// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
const whitelist = ['http://room-me-front.herokuapp.com'];

module.exports = {
  mongoDS: {
    connector: 'mongodb',
    hostname: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'roomme',
    url:process.env.DB_URL || ""
  },
  "initial": {
    "cors": {
      "params": {
        "origin": function (origin, callback) {
          console.log(origin);
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
