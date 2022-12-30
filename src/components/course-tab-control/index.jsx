import React, { useState } from "react"
import { Typography, Space, theme, Tabs, Col, Row, Image, Progress } from "antd"
import logC from "../../assets/logo/c.png"
import logDart from "../../assets/logo/dart.png"
import logGo from "../../assets/logo/go.png"
import logoJavaScript from "../../assets/logo/javascript.png"
import logPython from "../../assets/logo/python.png"
import "./index.css"

const { Text } = Typography
const { useToken } = theme

const CourseTabControl = (props) => {
  const { token } = useToken()

  const stateMap = new Map()
  const tabsArray = []
  props.array.forEach((e, i) => {
    tabsArray[i] = { label: e.key, key: e.key }
    stateMap.set(e.key, e.value)
  })

  const [logs, setLogs] = useState(logC)
  const [progress, setProgress] = useState(stateMap.get("C/C++"))
  const switchoverLogs = (key) => {
    switch (key) {
      case "C/C++":
        setLogs(logC)
        setProgress(stateMap.get(key))
        break
      case "Python":
        setLogs(logPython)
        setProgress(stateMap.get(key))
        break
      case "Go":
        setLogs(logGo)
        setProgress(stateMap.get(key))
        break
      case "Js":
        setLogs(logoJavaScript)
        setProgress(stateMap.get(key))
        break
      case "Dart":
        setLogs(logDart)
        setProgress(stateMap.get(key))
        break
      default:
        setLogs(logC)
        setProgress(stateMap.get(key))
    }
  }

  const courseProgress = (
    <Row className="learning-progress" wrap={false}>
      <Col className="learning-progress-image" flex="none">
        <Image preview={false} src={logs} />
      </Col>
      <Col className="learning-progress-aggregate-scheduling" flex="none">
        总进度
      </Col>
      <Col className="learning-progress-start-time" flex="none">
        开始时间
      </Col>
      <Col className="learning-progress-date" flex="none">
        {props.date}
      </Col>
      <Col flex="auto">
        <Progress percent={progress} status="active" />
      </Col>
    </Row>
  )

  return (
    <>
      <div className="course-tab-control">
        <Space
          className="course-tab-control-space"
          direction="vertical"
          size={token.margin}
          style={{ marginLeft: token.marginXL }}
        >
          <Text
            className="course-tab-control-font-bold"
            style={{ fontSize: token.fontSizeXL, color: token.colorText }}
          >
            课程列表
          </Text>
          <Text
            className="course-tab-control-font-bold"
            style={{
              fontSize: token.fontSize,
              color: token.colorTextSecondary,
            }}
          >
            不积跬步⽆以⾄千⾥。
          </Text>
        </Space>
        <Tabs
          defaultActiveKey="1"
          style={{
            marginLeft: token.marginXL,
          }}
          onChange={(key) => {
            switchoverLogs(key)
            props.onChange(key)
          }}
          items={tabsArray}
        />
      </div>
      {courseProgress}
    </>
  )
}

export default CourseTabControl
