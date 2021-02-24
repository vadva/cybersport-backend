const { Schema } = require("mongoose");

module.exports = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  url_for_Logo: {
    type: String,
    required: [true, "url_for_logo is required!"],
    minlength: 3,
    unique: false,
  },

  tournaments: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "tournaments",
      },
    },
  ],

  teammates: {
    type: Array,
    required: false,
  },

  matches: {
    type: Number,
    min: 0,
    required: [true, "matches is required!"],
  },

  winRate: {
    type: Number,
    min: 0,
    required: [true, "winRate is required!"],
  },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
});
