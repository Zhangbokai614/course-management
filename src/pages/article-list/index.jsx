import React from 'react';
import { theme, Row, Col, Space, Typography } from 'antd';
import 'antd/dist/reset.css';

import './index.css';
const { useToken } = theme;
const { Text } = Typography;

const ArticleListPage = () => {
  const { token } = useToken();

  return (
    <Row className='page'>
      <Col className='head'>
        <Space direction='vertical' size={token.margin} style={{ marginLeft: token.marginXL, marginTop: token.marginXXL }}>
          <Text className='font-bold' style={{ fontSize: token.fontSizeXL, color: token.colorText }}>系列文章</Text>
          <Text className='font-bold' style={{ fontSize: token.fontSize, color: token.colorTextSecondary }}>听君一席话, 胜读十年书!</Text>
        </Space>
      </Col>
      <Col className='body' style={{ marginLeft: token.marginLG, marginRight: token.marginLG, marginTop: token.marginLG }}>
      </Col>
    </Row >
  );
};

export default ArticleListPage;