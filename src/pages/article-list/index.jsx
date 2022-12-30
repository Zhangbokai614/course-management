import React, { useState } from 'react';
import { theme, Row, Col, Space, Typography, Tag } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

import './index.css';

const { useToken } = theme;
const { Text, Link } = Typography;
const { CheckableTag } = Tag;

const ArticleListPage = () => {
  const { token } = useToken();
  const [categoryBox, setCategoryBox] = useState("hidden");
  const [currentCategoryItemIdx, setCurrentCategoryItemIdx] = useState(0);

  let categorys = [
    '类目零',
    '类目一',
    '类目二',
    '类目三',
    '类目四',
    '类目五',
    '类目六',
    '类目七',
    '类目八',
    '类目九',
    '类目十',
    '类目十一',
    '类目十二',
    '类目十三',
    '类目十四',
    '类目十五',
    '类目十六',
    '类目十七',
    '类目十八',
    '类目十九',
    '类目二十'
  ];

  function changeCategoryItemState(newCategoryItemIdx) {
    if (currentCategoryItemIdx !== newCategoryItemIdx) {
      setCurrentCategoryItemIdx(newCategoryItemIdx);
    }
  }

  return (
    <Row className='page'>
      <Col className='head'>
        <Space direction='vertical' size={token.margin} style={{ marginLeft: token.marginXL, marginTop: token.marginXXL }}>
          <Text className='font-bold' style={{ fontSize: token.fontSizeXL, color: token.colorText }}>系列文章</Text>
          <Text className='font-bold' style={{ fontSize: token.fontSize, color: token.colorTextSecondary }}>听君一席话, 胜读十年书!</Text>
        </Space>
      </Col>
      <Col className='body' style={{ marginLeft: token.marginLG, marginRight: token.marginLG, marginTop: token.marginLG }}>
        <Row id='category-box' className={categoryBox === "hidden" ? "hidden" : "show"}>
          <Col style={{ marginLeft: token.marginXXL, whiteSpace: "nowrap", lineHeight: `${token.fontSizeHeading3}px` }}>类目名称:</Col>
          <Col style={{ marginLeft: token.marginXL, marginRight: token.marginXL, flex: 1 }}>
            <Row gutter={[12, 0]}>
              {
                categorys.map((categoryItem, idx) => {
                  return <Col>
                    <CheckableTag
                      className='category-item'
                      checked={idx === currentCategoryItemIdx ? true : false}
                      onChange={() => changeCategoryItemState(idx)}
                      style={{ fontSize: token.fontSize }}>
                      {categoryItem}
                    </CheckableTag>
                  </Col>
                })
              }
            </Row>
          </Col>
          <Col style={{ marginRight: token.marginXXL, whiteSpace: "nowrap", lineHeight: `${token.fontSizeHeading3}px`, marginLeft: "auto" }}>
            <Link onClick={() => { setCategoryBox(categoryBox === "show" ? "hidden" : "show"); }} >
              {categoryBox === "show" ? "收起" : "展开"}
              &nbsp;
              {categoryBox === "show" ? <UpOutlined /> : <DownOutlined />}
            </Link>
          </Col>
        </Row>

        <Row style={{ background: "lightcyan", flex: 1 }}>
          {currentCategoryItemIdx}
          {categorys[currentCategoryItemIdx]}
        </Row>
      </Col >
    </Row >
  );
};

export default ArticleListPage;