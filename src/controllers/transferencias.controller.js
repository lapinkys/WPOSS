const transferenciasCtrl = {};

// Models
const Transferencia = require("../models/Transferencia");

transferenciasCtrl.renderTransferenciaForm = (req, res) => {
  res.render("transfrencias/new-transferencia");
};

transferenciasCtrl.createNewTransferencia = async (req, res) => {
  const { retiro, saldo, fecha} = req.body;
  const errors = [];
  if (!retiro) {
    errors.push({ text: "Por favor indique el valor del retiro." });
  }
  if (!saldo) {
    errors.push({ text: "su saldo es:" });
  }
  if (!fecha) {
    errors.push({ text: "Date.now " });
  }
  if (errors.length > 0) {
    res.render("transferencias/new-transferencia", {
      errors,
      retiro,
      saldo,
      fecha,
    });
  } else {
    const newTransferencia = new Transferencia({ retiro, saldo, fecha });
    newTransferencia.id = req.user.id;
    await newTransferencia.save();
    req.flash("success_msg", "Transferencia Exitosa");
    res.redirect("/transferencias");
  }
};

transferenciasCtrl.renderTranferencias = async (req, res) => {
  const transferencias = await Transferencia.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("transferencias/all-transferencias", { transferencias });
};

transferenciasCtrl.renderEditForm = async (req, res) => {
  const transferencia = await transferencia.findById(req.params.id).lean();
  if (transferencia.id != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/transferencias");
  }
  res.render("transferencias/edit-transferencias", { note });
};

transferenciasCtrl.updatetransferencia = async (req, res) => {
  const { title, description } = req.body;
  await transferencia.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Successfully");
  res.redirect("/transferencias");
};

transferenciasCtrl.deletetransferencia = async (req, res) => {
  await transferencia.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "transferencia borrada");
  res.redirect("/transferencias");
};

module.exports = transferenciasCtrl;
