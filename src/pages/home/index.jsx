import React from 'react';
import 'antd/dist/reset.css';
import { InfoCircleOutlined, SendOutlined } from '@ant-design/icons';

import './index.css'
import { Placeholder } from '../../components/placeholder';

const HomePage = () => {
  return (
    <div className='App'>
      <div className='up'>
        <Placeholder height='54px' display='block' />
        <div>
          <Placeholder width='32px' display='inline-block' />
          <div className='upTitleText' style={{ display: 'inline' }}>Weclome</div>
        </div>

        <Placeholder height='16px' display='block' />
        <div>
          <Placeholder width='32px' display='inline-block' />
          <div className='upSmallTitleText' style={{ display: 'inline' }}>欢迎进入程序员大家庭!</div>
        </div>

        <div className='upLink'>
          <Placeholder width='32px' display='inline-block' />
          <div style={{ display: 'flex', flexDirection: 'row', color: '#1890FF' }}>
            <SendOutlined style={{ fontSize: '24px' }} />
            <div style={{ height: '24px', fontSize: '14px', lineHeight: '24px' }}>&nbsp;快速开始</div>
          </div>
          <Placeholder width='32px' display='inline-block' />
          <div style={{ display: 'flex', flexDirection: 'row', color: '#1890FF' }}>
            <InfoCircleOutlined style={{ fontSize: '24px' }} />
            <div style={{ height: '24px', fontSize: '14px', lineHeight: '24px' }}>&nbsp;选择课程</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '26px', marginLeft: '24px', marginRight: '24px', textAlign: 'center' }}>
        <img src={[require('../../assets/img/home-middle.png')]} alt='' style={{ width: '100%' }} />
        <Placeholder height='26px' display='block' />
        <img src={[require('../../assets/img/home-middle.png')]} alt='' style={{ width: '100%' }} />
      </div>
    </div >
  )
};

export default HomePage;
