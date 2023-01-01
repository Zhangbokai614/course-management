const express = require("express")
const cors = require("cors")
const path = require("path")
const courseList = require("./course-list")
const article = require("./article")
const articleList = require("./article-list")
const course = require("./course")
const app = express()

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["conten-Type", "Authorization"],
  })
)

let NODE_PORT = process.env.PORT || 4000
app.use(express.static(path.join(__dirname, "./")))

app.use("/courseList", courseList)
app.use("/article", article)
app.use("/article-list", articleList)
app.use("/course", course)

app.listen(NODE_PORT, function () {
  console.log("mock service in " + NODE_PORT + " enabled on port!")
})
