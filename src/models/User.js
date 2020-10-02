const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  nombres: { type: String },
  cc: { type: String, unique: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  estado: { type: String},
  fecha: { type: Date, default: Date.now },
  cuenta: { type: String, default: String.now  },
  saldo: { type: String, default: String.now },
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
