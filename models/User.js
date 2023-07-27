const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userCounter: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
  },
  organization: {
    type: Schema.Types.Mixed,
  },
  department: {
    type: Schema.Types.Mixed,
  },
  labtype: {
    type: Schema.Types.Mixed,
  },
  procedureIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "procedure",
    },
  ],
}, { timestamps: true });

module.exports = User = mongoose.model("user", UserSchema);
