const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const celebritySchema = new Schema(
  {
  name: String,
  occupation: {
    type: String,
    default: 'unknown'
  },
  catchPhrase: {
    type: String,
    default: "Baby, you're the greatest"
  }
 }
)

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;