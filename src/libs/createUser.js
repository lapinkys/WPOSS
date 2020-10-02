const User = require("../models/User");

const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "admin@localhost" });

  if (userFound) return;

  const newUser = new User({
    username: "admin",
    email: "admin@localhost",
    estado:"activo",
    cc:"123456",
    cuenta:"1000000",
  });

  newUser.password = await newUser.encryptPassword("adminpassword");

  const admin = await newUser.save();

  console.log("Usuario administrador creado", admin);
};

module.exports = { createAdminUser };

