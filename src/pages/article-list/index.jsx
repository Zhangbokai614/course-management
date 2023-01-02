import React, { useState, useEffect } from 'react';
import { theme, Row, Col, Space, Typography, Tag } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

import services from '../../services';
import './index.css';

const { useToken } = theme;
const { Text, Link } = Typography;
const { CheckableTag } = Tag;
const { articleList } = services.articleList;
const dataType = {
  category: 'category',
  article: 'articles',
}

const ArticleListPage = (props) => {
  const { token } = useToken();

  const [categorysLabel, setCategoryLabel] = useState([]);
  const [currentCategoryLabelIdx, setCurrentCategoryLabelIdx] = useState(0);
  const [categoryBox, setCategoryBox] = useState('hidden');
  const [categoryBoxScroll, setCategoryBoxScroll] = useState('false');
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [contentBoxHeight, setContentBoxHeight] = useState(screenHeight - screenHeight * 0.05 - 200 - 24 - 24 - 48 - 24);

  function changeCategoryBox() {
    if (categoryBox === 'show') {
      document.getElementById('box').scrollTop = 0;
      setCategoryBox('hidden');
    } else {
      setCategoryBox('show');
    }
  }

  function changeCategoryItemState(newCategoryItemIdx) {
    if (currentCategoryLabelIdx !== newCategoryItemIdx) {
      setCurrentCategoryLabelIdx(newCategoryItemIdx);
      console.log(newCategoryItemIdx);
    }
  }

  function changeContentBoxHeight() {
    if (categoryBox === 'show') {
      setContentBoxHeight(screenHeight - screenHeight * 0.05 - 200 - 24 - 24 - 84);
    } else if (categoryBox === 'hidden') {
      setContentBoxHeight(screenHeight - screenHeight * 0.05 - 200 - 24 - 24 - 48 - 24);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => { setScreenHeight(window.innerHeight) });
    document.getElementById("box").addEventListener("transitionend", (ele) => {
      if (ele.propertyName === "height") {
        let e = document.getElementById("box");
        setCategoryBoxScroll(e.getAttribute("scroll") === "false" ? "true" : "false");
      }
    });

    const requestData = async () => {
      const { data } = await articleList({ type: dataType.category })
      setCategoryLabel(data)
    }
    requestData()
  }, [])

  useEffect(() => {
    changeContentBoxHeight();
    if (categoryBox === "hidden") {
      let e = document.getElementById("box");
      e.style.overflowY = "hidden";
    }
  }, [screenHeight, categoryBox])

  useEffect(() => {
    if (categoryBoxScroll === 'true') {
      let e = document.getElementById("box");
      e.style.overflowY = "auto";
    }
  }, [categoryBoxScroll]);

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
          <Col id='box' className={categoryBox === 'hidden' ? 'hidden' : 'show'} scroll={categoryBoxScroll} style={{ marginLeft: token.marginXL, marginRight: token.marginXL, flex: 1 }}>
            <Row gutter={[12, 0]}>
              <Col>
                <CheckableTag
                  className='category-item'
                  checked={-1 === currentCategoryLabelIdx ? true : false}
                  onChange={() => changeCategoryItemState(-1)}
                  style={{ fontSize: token.fontSize }}>
                  {'all'}
                </CheckableTag>
              </Col>
              {
                categorysLabel.map((categoryItem, idx) => {
                  return <Col>
                    <CheckableTag
                      className='category-item'
                      checked={idx === currentCategoryLabelIdx ? true : false}
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
      </Col>
      <Col id='content-box' style={{
        backgroundColor: 'white',
        height: `${contentBoxHeight}px`,
        minHeight: '200px',
        margin: '0 24px',
        transition: 'height 0.3s'
      }}>
        content article list
      </Col>
    </Row >
  );
};

export default ArticleListPage;