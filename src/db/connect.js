const mongoose = require("mongoose");
const server = "mongodb://127.0.0.1:27017";
const db_name = "T2210M";
class Database {
  constructor() {
    mongoose
      .connect(`${server}/${db_name}`)
      .then(() => {
        console.log(`Connect to db ${db_name}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
module.exports = new Database();
