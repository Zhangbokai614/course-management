import React from "react"
import { ProCard } from "@ant-design/pro-components"
import { Progress } from "antd"
import { createFromIconfontCN } from "@ant-design/icons"
const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js",
    // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
})
// import styles from './index.less';

const LearningProgress = () => (
  <ProCard
    direction="row"
    ghost
    layout="center"
    style={{ height: 80, background: "white", marginBottom: 20 }}
  >
    <ProCard ghost colSpan="10%">
      <IconFont
        type="icon-python"
        style={{ paddingLeft: 40, fontSize: "60px", color: "#08c" }}
      />
    </ProCard>
    <ProCard ghost colSpan="6%">
      <div>总进度</div>
    </ProCard>
    <ProCard ghost colSpan="7%">
      <div>开始时间</div>
    </ProCard>
    <ProCard ghost colSpan="12%">
      <div>2016-06-16 14:03</div>
    </ProCard>
    <ProCard ghost colSpan="65%" style={{ paddingRight: 20 }}>
      <Progress percent={50} />
    </ProCard>
  </ProCard>
)

export default LearningProgress
