const bcrypt = require("bcrypt");
const { User } = require('../models')
const {check, validationResult, body} = require('express-validator');

const userController = {
  create: (_req, res) => res.render("cadastro"),

  store: async (req, res) => {  
    const { name, email, password } = req.body;  

    let listaDeErrors = validationResult(req)

    const verificaEmail = await User.findOne({
      where:{email}
    })

    if(listaDeErrors.isEmpty()){ 
      if(verificaEmail == null){
        const hashPassword = bcrypt.hashSync(password, 10);

        const user = await User.create({
          name,          
          email,
          password: hashPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        
        req.session.user = {
          id: user.id,
          name: user.name,
          email: user.email,      
        };
        
        if (!user) {
          return res.render("cadastro", {
            msg: "Erro ao cadastrar um usuario",
          });
        }
      }  else {
        return res.render("cadastro", {msg:"O email já cadastrado!"})
      }
      } else {
        console.log(listaDeErrors)
      return res.render("cadastro", {errors:listaDeErrors.errors})
      }  
      
     

    return res.redirect("/dashboard");
  },  
};

module.exports = userController;
