const agendarController = {
    create: (req, res) => {
      const { user } = req.session;
      res.render("agendar",{user})
    }
  }
  
  module.exports = agendarController