let mongoose = require('mongoose');

let PrincipleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Principle', PrincipleSchema);
