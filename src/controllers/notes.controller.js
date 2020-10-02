const notesCtrl = {};

// Models
const Note = require("../models/Note");
const User = require('../models/User');

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
  const { retiro,  fecha} = req.body;
  const errors = [];
  if (!retiro) {
    errors.push({ text: "Por favor indique el valor del retiro." });
  }
  /*
  if (!saldo) {
    errors.push({ text: "su saldo es:"  });
  }
  if (!fecha) {
    errors.push({ text: "Date.now " });
  }*/
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      retiro,
    });
  } else {
    var cont = 0, sald = 1000000;
    if(sald == 0){
      if(cont == 0){  
      var saldos = sald - retiro;    
      var saldod = saldos;      
      cont = cont + 1;
    }
    else{
      saldos = saldod - retiro;
    }
    const newNote = new Note({ retiro, saldos, fecha });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash("success_msg", "Retiro Exitoso");
    res.redirect("/notes");  
  }      
  }
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash("error_msg", "No estas Autorizado");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};

notesCtrl.updateNote = async (req, res) => {
  const { retiro, saldo } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { retiro, saldo });
  req.flash("success_msg", "Retiro actualizado");
  res.redirect("/notes");
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Retiro Eliminado");
  res.redirect("/notes");
};

module.exports = notesCtrl;
