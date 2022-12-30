import React from "react"
import { Row } from "antd"
import CourseTabControl from "../../components/course-tab-control"
import CourseInformation from "../../components/course-information"
import "./index.css"

const ArticlePage = () => {
  return (
    <>
      <CourseTabControl
        array={[
          { key: "C/C++", value: 12 },
          { key: "Python", value: 32 },
          { key: "Go", value: 19 },
          { key: "Js", value: 56 },
          { key: "Dart", value: 3 },
        ]}
        onChange={(val) => {
          console.log(val)
        }}
        progress={50}
        date={"2016-06-16 14:03"}
      ></CourseTabControl>
      <Row className="task-card">
        <CourseInformation></CourseInformation>
        <CourseInformation></CourseInformation>
        <CourseInformation></CourseInformation>
        <CourseInformation></CourseInformation>
      </Row>
    </>
  )
}

export default ArticlePage
