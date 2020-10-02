const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.singup = async (req, res) => {
  let errors = [];
  
  //const estado;
  //var saldo = Number('1000000');
  const { name, cc, email, password, confirm_password, estado = 'activo', fecha, cuenta = (String) (Math.random()*10+1), saldo = Number('1000000') } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Los passwords no concuerdan." });
  }
  if (password.length < 5) {
    errors.push({ text: "el password no puede tener menos de 5 caracteres." });
  }
  const dns = require('dns');
function Validar_email(email){
  let domain = email.split('@')[1];  
      dns.resolve(domain, 'MX', function(err, addresses) {    
       errors.push({ text: "no has ingresado un email correcto." });  
      if (addresses && addresses.length > 0) {      
         errors.push({ text: "has ingresado un email correcto." });
      }
        })
      }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      cc,
      email,
      password,
      estado,  
      cuenta, 
      saldo
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    const estadoUser = await User.findOne({ estado: estado });
    if (emailUser) {
      req.flash("error_msg", "El email ya existe.");
      res.redirect("/users/signup");
    } else {
      if (estadoUser == 'activo') {
               
        req.flash("error_msg", "El usuario se encuentra bloquedo temporalmente.");
        res.redirect("/users/signup");
      }
      else{
        // Saving a New User
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Ya se encuentra registrado.");
      res.redirect("/users/signin"); 
      }
    } 
  }
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true
  });

usersCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Ahora ya te encuentras logueado.");
  res.redirect("/users/signin");
};

module.exports = usersCtrl;