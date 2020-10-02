const { Schema, model } = require("mongoose");

const DepositoSchema = new Schema(
  {
  saldo: 
  { 
    type: String, 
    required: true 
  },
  deposito: 
  { 
    type: String, 
    required: true 
  },
  fecha: 
  { 
    type: Date, 
    default: Date.now 
  },
  user_id: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Deposito", DepositoSchema);
