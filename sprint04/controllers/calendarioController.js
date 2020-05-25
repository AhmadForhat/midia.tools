const calendarioController = {
    create: (req, res) => {
      const { user } = req.session;
      res.render("calendario",{user})
    }
  }
  
  module.exports = calendarioController