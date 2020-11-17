const express = require("express");
const route = express.Router()
const controller = require("./controller")

route.get("/", function(req, res){
    return res.render("teachers/index")
})

route.post("/register", controller.post)

module.exports = route