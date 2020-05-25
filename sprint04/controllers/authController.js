const bcrypt = require("bcrypt");
const{User} = require('../models')

const authController = {
  create: (_req, res) => {
    return res.render("login");
  },
  store: async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({
        where:{email}
      })
  

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.render("login", {
        msg: "Email ou senha errados!",
      });
    }
        

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,      
    };
    

    return res.redirect("/dashboard");
  },
  
  destroy: (req, res) => {
    req.session.user = undefined;
    return res.redirect("/login");
  },

};

module.exports = authController;