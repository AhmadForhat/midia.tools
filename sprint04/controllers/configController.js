const configController = {
    create: (req, res) => {
      const { user } = req.session;      
      res.render("configuracoes",{user})
    }
  }
  
  module.exports = configController