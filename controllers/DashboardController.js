'use strict';
exports.loadDashboard = function (req, res) {
  //TODO: Get dashboard data
  var token =  req.session.email;
  var username = req.session.username;
  var status = req.session.status;
  var loggedIn = req.session.loggedIn;
  var role =  req.session.role;

  if (loggedIn === undefined || loggedIn === false){ 
    res.redirect("login");
  }else{
    res.render("dashboard",  {username, token, status, loggedIn, role});
  }  
};
