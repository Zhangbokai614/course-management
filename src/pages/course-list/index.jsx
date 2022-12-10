import React from "react"
import { PageContainer, ProCard } from "@ant-design/pro-components"
import { Descriptions } from "antd"
import LearningProgress from "./components/LearningProgress"
import StudyCards from "./components/StudyCards"

const ArticlePage = () => (
  <>
    <PageContainer
      fixedHeader
      header={{
        title: "课程列表",
      }}
      content={
        <Descriptions>
          <Descriptions.Item>不积跬步何以至千里。</Descriptions.Item>
        </Descriptions>
      }
      onTabChange={(e) => {
        console.log(e)
      }}
      tabList={[
        {
          tab: "C/C++",
          key: "C/C++",
        },
        {
          tab: "Python",
          key: "Python",
        },
        {
          tab: "Go",
          key: "Go",
        },
        {
          tab: "Js",
          key: "Js",
        },
      ]}
    >
      <ProCard direction="column" ghost gutter={[24]}>
        <LearningProgress></LearningProgress>
        <StudyCards></StudyCards>
      </ProCard>
    </PageContainer>
  </>
)

export default ArticlePage
