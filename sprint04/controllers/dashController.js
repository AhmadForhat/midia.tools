const dashController = {
  create: (req, res) =>{
    const { user } = req.session;
    res.render("dashboard", {user})
  } 
}

module.exports = dashController