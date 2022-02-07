const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      index: "text",
    },
    description: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "celebreties",
    },
  },
  { timeseries: true, toJSON: { virtuals: true } }
);

module.exports = mongoose.model("works", WorkSchema);
