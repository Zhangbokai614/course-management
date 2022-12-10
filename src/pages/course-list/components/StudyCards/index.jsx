import React from "react"
import { ProCard } from "@ant-design/pro-components"
import "./index.css"

const cards = (
  <ProCard
    ghost
    direction="column"
    layout="center"
    colSpan={8}
    style={{ height: 180, background: "white", marginBottom: 24 }}
  >
    <ProCard ghost style={{ height: 140 }} />
    <ProCard
      ghost
      direction="row"
      layout="center"
      split="vertical"
      colSpan="90%"
      style={{ height: 40 }}
    >
      <div className={"selectCards"}>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
        <div className={"selected"}></div>
      </div>
    </ProCard>
  </ProCard>
)

const StudyCards = () => (
  <ProCard ghost wrap gutter={24}>
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
    {cards}
  </ProCard>
)

export default StudyCards
