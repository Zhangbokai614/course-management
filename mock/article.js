const express = require("express")
var fs = require("fs")

var data = fs.readFileSync("input.txt")
const apiRoutes = express.Router()

let random = Math.random() * 500 + 500

apiRoutes.get("/markdown", function (req, res) {
  setTimeout(() => {
    res.send({
      success: true,
      data: data.toString(),
      errorCode: 0,
    })
  }, random)
})

module.exports = apiRoutes
