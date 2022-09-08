const mongoose = require("mongoose")

const profileList = new mongoose.Schema({
  name: {type: String , required: true},
  profession: {type: String, required: true},
  Degree: {type: String, required: true},
  experience: {type: Number, required: true},
  image: {type: String, required: true}
},
{
    versionKey : false,
    timestamps : true
}
)

const ProductsList = mongoose.model("profileList", profileList);

module.exports = ProductsList