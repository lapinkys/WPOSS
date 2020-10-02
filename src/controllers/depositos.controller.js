const depositosCtrl = {};

// Models
const Deposito = require("../models/deposito");

depositosCtrl.renderDepositoForm = (req, res) => {
  res.render("deposito/new-deposito");
};

depositosCtrl.createNewDeposito = async (req, res) => {
  const { deposito, saldo, fecha, id} = req.body;
  const errors = [];
  if (!deposito) {
    errors.push({ text: "Por favor indique el valor del deposito." });
  }
  if (!saldo) {
    errors.push({ text: "su saldo es:" });
  }
  if (!fecha) {
    errors.push({ text: "Date.now " });
  }
  if (!id) {
    errors.push({ text: "Por favor indique el numero de cedula" });
  }
  if (errors.length > 0) {
    res.render("deposito/new-deposito", {
      errors,
      deposito,
      saldo,
      fecha,
      id,
    });
  } else {
    const newDeposito = new Deposito({ desposito, saldo, fecha, id });
    newDeposito.user = req.user.id;
    await newDeposito.save();
    req.flash("success_msg", "Deposito Exitoso");
    res.redirect("/deposito");
  }
};

depositosCtrl.renderDeposito = async (req, res) => {
  const deposito = await Deposito.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("deposito/all-deposito", { depositos });
};

depositosCtrl.renderEditForm = async (req, res) => {
  const deposito = await Deposito.findById(req.params.id).lean();
  if (deposito.id != req.user.id) {
    req.flash("error_msg", "No autorizado");
    return res.redirect("/depositos");
  }
  res.render("depositos/edit-deposito", { deposito });
};

depositosCtrl.updateDeposito = async (req, res) => {
  const { deposito, saldo, fecha, id  } = req.body;
  await Deposito.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Deposito actualizado");
  res.redirect("/depositos");
};

depositosCtrl.deleteDeposito = async (req, res) => {
  await Deposito.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Deposito Eliminado");
  res.redirect("/depositos");
};

module.exports = depositosCtrl;
