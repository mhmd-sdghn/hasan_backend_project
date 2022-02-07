const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "celebreties",
    },
  },
  { timeseries: true, toJSON: { virtuals: true } }
);

mongoose.exports = mongoose.model("works", WorkSchema);
