import React, { useRef } from "react"
import { useSize } from "ahooks"
import { Col, Image, Tooltip, Button, Carousel, Popover } from "antd"
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons"
import imageArray from "../../assets/img/course-array.png"
import "./index.css"

const CourseInformation = () => {
  const ref = useRef(null)
  const size = useSize(ref)

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  const carouselRef = React.createRef()

  return (
    <Col className="task-card-card">
      <Image preview={false} src={imageArray} />
      <div className="task-card-card-bottom">
        <div className="task-card-card-bottom-left-right">
          <Tooltip title="上一个">
            <Button
              type="text"
              icon={<DoubleLeftOutlined style={{ color: "#08c" }} />}
              onClick={() => {
                carouselRef.current.prev()
              }}
            />
          </Tooltip>
        </div>
        <div className="task-card-card-bottom-middle" ref={ref}>
          <Carousel dots={false} ref={carouselRef}>
            <div>
              <div className="task-card-card-bottom-middle-carousel">
                <Popover content={content} title="Title">
                  <div className="selected"></div>
                </Popover>
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
                <div>{size?.width}px</div>
              </div>
            </div>
            <div>
              <div className="task-card-card-bottom-middle-carousel">
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
              </div>
            </div>
            <div>
              <div className="task-card-card-bottom-middle-carousel">
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
              </div>
            </div>
            <div>
              <div className="task-card-card-bottom-middle-carousel">
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
                <div className="selected"></div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="task-card-card-bottom-left-right">
          <Tooltip title="下一个">
            <Button
              type="text"
              icon={<DoubleRightOutlined style={{ color: "#08c" }} />}
              onClick={() => {
                carouselRef.current.next()
              }}
            />
          </Tooltip>
        </div>
      </div>
    </Col>
  )
}

export default CourseInformation
