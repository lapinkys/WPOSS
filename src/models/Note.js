const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
  saldo: 
  { 
    type: String
  },
  retiro: 
  { 
    type: String, 
    required: true 
  },
  fecha: 
  { 
    type: Date, 
    default: Date.now 
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

module.exports = model("Note", NoteSchema);
