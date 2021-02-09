let mongoose = require('mongoose');

let ValueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Value', ValueSchema);
