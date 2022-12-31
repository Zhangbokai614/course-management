const express = require("express")
const apiRoutes = express.Router()

apiRoutes.get("/data", function (req, res) {
  setTimeout(() => {
    res.send({
      success: true,
      data: 1,
      errorCode: 0,
    })
  })
})

module.exports = apiRoutes
