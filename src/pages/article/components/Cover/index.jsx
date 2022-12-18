import React from "react"
import ReactMarkdown from "react-markdown"
// import { Button } from "antd"
// import { currentUser } from "../../../../services/article"
import "./index.css"

const markdown = "# Hello, *world*!"

const Cover = () => (
  <div className="Cover-Container">
    <div className="Cover-Container-middle">
      <h1 className="Cover-title">Go I/O(二)</h1>
      <h2 className="Cover-author">作者： kkk</h2>
      <div className="Cover-straight-matter">
        <div className="Cover-text">
          <ReactMarkdown children={markdown} />
          {/* <Button
            type="primary"
            onClick={() => {
              console.log(
                currentUser()
                  .then(function (response) {
                    console.log(response)
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              )
            }}
          >
            Primary Button
          </Button> */}
        </div>
      </div>
    </div>
  </div>
)

export default Cover
