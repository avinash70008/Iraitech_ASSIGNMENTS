
const mongoose = require("mongoose");

const connect = async () => {
  try {
    return await mongoose.connect(
      "mongodb+srv://avinash:avinash123@cluster0.avqugsd.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("error form connection :", err.message);
  }
};

module.exports = connect;
