import React, { useState } from 'react';
import { theme, Row, Col, Space, Typography, Tag, Card, List } from 'antd';
import { useLocation } from 'react-router-dom';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

import './index.css';

const { useToken } = theme;
const { Text, Link } = Typography;
const { CheckableTag } = Tag;

const ArticleListPage = (props) => {
  const { token } = useToken();
  const location = useLocation();
  const [categoryBox, setCategoryBox] = useState('hidden');
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
    '类目二十',

    '类目二十一',
    '类目二十二',
    '类目二十三',
    '类目二十三',
  ];

  function changeCategoryItemState(newCategoryItemIdx) {
    if (currentCategoryItemIdx !== newCategoryItemIdx) {
      setCurrentCategoryItemIdx(newCategoryItemIdx);
      console.log(newCategoryItemIdx);
    }
  }

  function changeCategoryBox() {
    if (categoryBox === 'show') {
      document.getElementById('box').scrollTop = 0;
      setCategoryBox('hidden');
    } else {
      setCategoryBox('show');
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
      <Col style={{ margin: token.marginLG }}>
        <Row id='category-box' >
          <Col style={{ marginLeft: token.marginXXL, whiteSpace: 'nowrap', lineHeight: `${token.fontSizeHeading3}px` }}>类目名称:</Col>
          <Col id='box' className={categoryBox === 'hidden' ? 'hidden' : 'show'} style={{ marginLeft: token.marginXL, marginRight: token.marginXL, flex: 1 }}>
            <Row gutter={[12, 0]}>
              <Col>
                <CheckableTag
                  className='category-item'
                  checked={-1 === currentCategoryItemIdx ? true : false}
                  onChange={() => changeCategoryItemState(-1)}
                  style={{ fontSize: token.fontSize }}>
                  {'全部'}
                </CheckableTag>
              </Col>
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
          <Col style={{ marginRight: token.marginXXL, whiteSpace: 'nowrap', lineHeight: `${token.fontSizeHeading3}px`, marginLeft: 'auto' }}>
            <Link onClick={changeCategoryBox} >
              {categoryBox === 'show' ? '收起' : '展开'}
              &nbsp;
              {categoryBox === 'show' ? <UpOutlined /> : <DownOutlined />}
            </Link>
          </Col>
        </Row>
      </Col >
      <Col id='content-box' style={{
        backgroundColor: 'white',
        height:
          categoryBox === 'hidden' ?
            'calc(100vh - 5vh - 200px - 24px - 24px - 48px - 24px)' :
            'calc(100vh - 5vh - 200px - 24px - 24px - 84px)',
        minHeight: '500px',
        margin: '0 24px',
        transition: 'height 0.3s'
      }}>
        content article list
      </Col>
    </Row >
  );
};

export default ArticleListPage;