import React from 'react';
import 'antd/dist/reset.css';
import { theme, Col, Row, Typography, Space } from 'antd';
import { InfoCircleOutlined, SendOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import './index.css'
import homeUp from '../../assets/img/home-up.png'
import homeMiddle from '../../assets/img/home-middle.png'

const { useToken } = theme;
const { Text, Paragraph, Link } = Typography;

const HomePage = () => {
  const { token } = useToken();
  const navigate = useNavigate();

  function gotoArticleList() {
    navigate("/articleList", {
      state: { userId: "123" },
    });
  }

  function gotoCourseList() {
    navigate("/courseList", {
      state: { userId: "123" },
    });
  }

  let imgs = (() => {
    return [
      homeUp,
      homeMiddle,
      homeMiddle
    ];
  })()

  return (
    <div>
      <Paragraph className='up' style={{ backgroundImage: `url(${imgs[0]})` }}>
        <Space direction='vertical' size={token.margin} style={{ marginLeft: token.marginXL }}>
          <Text className='font-bold' style={{ fontSize: token.fontSizeXL, color: token.colorText }}>Weclome</Text>
          <Text className='font-bold' style={{ fontSize: token.fontSize, color: token.colorTextSecondary }}>欢迎进入程序员大家庭!</Text>
        </Space>

        <Row className='up-link'>
          {
            [
              {
                icon: <SendOutlined style={{ fontSize: token.fontSizeHeading3 }} />,
                linkText: <Text className='link-text' style={{ color: token.colorPrimary, fontSize: token.fontSize }}>&nbsp;快速开始</Text>,
                action: gotoArticleList
              },
              {
                icon: <InfoCircleOutlined style={{ fontSize: token.fontSizeHeading3 }} />,
                linkText: <Text className='link-text' style={{ color: token.colorPrimary, fontSize: token.fontSize }}>&nbsp;选择课程</Text>,
                action: gotoCourseList
              },
            ].map(v => {
              return <Col>
                <Link onClick={v.action} style={{ marginLeft: token.marginXL, display: 'flex' }}>
                  {v.icon}
                  {v.linkText}
                </Link>
              </Col>;
            })
          }
        </Row>
      </Paragraph>

      <Row style={{ marginTop: token.marginLG, paddingLeft: token.paddingLG, paddingRight: token.paddingLG }}>
        <Col flex="auto">
          {
            imgs.map((v, i) => {
              return i !== 0 ? <Row style={{ marginBottom: token.margin }}>
                <Col flex="100%">
                  <img src={v} alt='' style={{ width: "100%" }} />
                </Col>
              </Row> : undefined;
            })
          }
        </Col>
      </Row>
    </div >
  )
};

export default HomePage;
