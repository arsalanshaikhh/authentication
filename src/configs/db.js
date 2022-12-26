const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://a:a@cluster0.mmdpraq.mongodb.net/?retryWrites=true&w=majority"
  );
};
