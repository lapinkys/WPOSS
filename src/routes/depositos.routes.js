const express = require("express");
const router = express.Router();

// Controller
const {
  renderDepositoForm,
  createNewDeposito,
  renderDepositos,
  renderEditForm,
  updateDeposito,
  deleteDeposito
} = require("../controllers/depositos.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Deposito
router.get("/depositos/add", isAuthenticated, renderDepositoForm);

router.post("/depositos/new-note", isAuthenticated, createNewDeposito);

// Get All Depositos
router.get("/depositos", isAuthenticated, renderDepositoForm);

// Edit Depositos
router.get("/depositos/edit/:id", isAuthenticated, renderEditForm);

router.put("/depositos/edit-note/:id", isAuthenticated, updateDeposito);

// Delete Depositos
router.delete("/depositos/delete/:id", isAuthenticated, deleteDeposito);

module.exports = router;
