import React, { useState, useEffect } from "react"
import services from "../../services/index"
import Cover from "../../components/text-markdown"
import "./index.css"

const ArticlePage = () => {
  const { currentUser } = services.article
  const [data, setData] = useState({ hits: "" })
  useEffect(() => {
    const requestData = async () => {
      const { data } = await currentUser()
      setData(data)
    }
    requestData()
  }, [currentUser])
  return (
    <>
      <div className="Article-Container">
        <div className="Article-Container-middle"></div>
      </div>
      <Cover title={"文章标题"} author={"作者： kkk"} text={data}></Cover>
    </>
  )
}

export default ArticlePage
