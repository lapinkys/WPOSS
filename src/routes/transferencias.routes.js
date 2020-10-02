const express = require("express");
const router = express.Router();

// Controller
const {
  renderTransferenciaForm,
  createNewTransferencia,
  renderTransferencias,
  renderEditForm,
  updateTransferencia,
  deleteTransferencia
} = require("../controllers/transferencias.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Tranferencia
router.get("/transferencias/add", isAuthenticated, renderTransferenciaForm);

router.post("/transferencias/new-transferencia", isAuthenticated, createNewTransferencia);

// Get All Transferencias
router.get("/transferencias", isAuthenticated, renderTransferenciaForm);

// Edit Transferencias
//router.get("/transferencias/edit/:id", isAuthenticated, renderEditForm);

//router.put("/transferencias/edit-transferencia/:id", isAuthenticated, updateTransferencia);

// Delete Transferencias
//router.delete("/transferencias/delete/:id", isAuthenticated, deleteTransferencia);

module.exports = router;
