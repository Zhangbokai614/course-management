const express = require("express")
const Mock = require("mockjs")
const apiRoutes = express.Router()

apiRoutes.get("/", function (req, res) {
    res.json(
        Mock.mock(
            [
                {
                    courseId: "JS-01",
                    title: "Js testing A",
                    code: "print('Hello world')",
                    text: "Good morning! Here's your coding interview problem for today.",
                    finish: true,
                },
                {
                    courseId: "JS-02",
                    title: "Js testing B",
                    code: "let testing = 'Hello world'",
                    text: Mock.Random.paragraph(),
                    finish: false,
                },
            ]
        )
    )
})


module.exports = apiRoutes
