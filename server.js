const express = require("express")
const server = express();
const nunjucks = require("nunjucks");
const routes = require("./routes")

server.set("view engine", "njk");

server.use(express.urlencoded({extended: true}));

server.use(express.static("public"))
server.use(routes);

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(4000, function(){
    console.log("server is running...");
})


