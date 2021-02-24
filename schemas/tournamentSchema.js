const { Schema } = require("mongoose");

module.exports = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  url_for_banner: {
    type: String,
    required: [true, "url_for_banner is required!"],
    minlength: 3,
    unique: false,
  },
  status: {
    type: String,
    required: [true, "status is required!"],
    enum: ["announce", "current", "finished"],
    default: "announce",
  },

  entry_from: {
    type: Number,
    min: 0,
    required: [true, "entry_from is required!"],
  },

  prise_sum: {
    type: Number,
    min: 0,
    required: [true, "prise_sum is required!"],
  },

  slots: {
    type: Number,
    min: 0,
    required: [true, "slots is required!"],
  },

  start_date: {
    required: false,
    type: Date,
  },
  createdAt: {
    required: false,
    default: Date.now,
    type: Date,
  },
  parentId: {
    type: Schema.Types.ObjectId, 
    ref: 'Tournament'
}
});
