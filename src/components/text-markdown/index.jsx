import React from "react"
import ReactMarkdown from "react-markdown"
import "./index.css"

const Cover = ({ title, author, text }) => {
  return (
    <div className="Cover-Container">
      <div className="Cover-Container-middle">
        <h1 className="Cover-title">{title}</h1>
        <h2 className="Cover-author">{author}</h2>
        <div className="Cover-straight-matter">
          <div className="Cover-text">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
