import React, { useState } from 'react';
import { theme } from 'antd';
import 'antd/dist/reset.css';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import './index.css';
import { Placeholder } from '../../components/placeholder';
import { ArticleBox } from '../../components/article-box';

const { useToken } = theme;

const ArticleListPage = () => {
  const { token } = useToken();

  const [allCategorsState, setAllCategorsStates] = useState('hidden');
  const [currentCategorIndexState, setCurrentCategorIndexState] = useState(0);

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

  let imgUrl = 'data:image/jpeg;base64,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';
  let articleList = [
    [
      { bigTitle: '类目零第一个大标题', littleTitle: '类目零第一个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第二个大标题', littleTitle: '类目零第二个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第三个大标题', littleTitle: '类目零第三个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第四个大标题', littleTitle: '类目零第四个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第五个大标题', littleTitle: '类目零第五个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第六个大标题', littleTitle: '类目零第六个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第七个大标题', littleTitle: '类目零第七个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第八个大标题', littleTitle: '类目零第八个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第九个大标题', littleTitle: '类目零第九个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目零第十个大标题', littleTitle: '类目零第十个小标题', imgUrl: imgUrl, articleUrl: '' },
      // { bigTitle: '类目零第十一个大标题', littleTitle: '类目零第十一个小标题', imgUrl: imgUrl, articleUrl: '' },
      // { bigTitle: '类目零第十二个大标题', littleTitle: '类目零第十二个小标题', imgUrl: imgUrl, articleUrl: '' },
      // { bigTitle: '类目零第十三个大标题', littleTitle: '类目零第十三个小标题', imgUrl: imgUrl, articleUrl: '' },
      // { bigTitle: '类目零第十四个大标题', littleTitle: '类目零第十四个小标题', imgUrl: imgUrl, articleUrl: '' },
    ],
    [
      { bigTitle: '类目一第一个大标题', littleTitle: '类目一第一个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目一第二个大标题', littleTitle: '类目一第二个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目一第三个大标题', littleTitle: '类目一第三个小标题', imgUrl: imgUrl, articleUrl: '' }
    ],
    [
      { bigTitle: '类目二第一个大标题', littleTitle: '类目二第一个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目二第二个大标题', littleTitle: '类目二第二个小标题', imgUrl: imgUrl, articleUrl: '' },
      { bigTitle: '类目二第三个大标题', littleTitle: '类目二第三个小标题', imgUrl: imgUrl, articleUrl: '' }
    ],
  ];

  function changeShowHidden() {
    setAllCategorsStates(allCategorsState === 'show' ? 'hidden' : 'show');
  }

  function changeCategory(e) {
    let t = parseInt(e.target.getAttribute('value'));
    if (t === currentCategorIndexState) {
      console.log('same');
    } else {
      setCurrentCategorIndexState(t);
    }
  }

  return (
    <div className='App' style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className='head'>
        <Placeholder height='54px' display='block' />
        <div>
          <Placeholder width='32px' display='inline-block' />
          <div className='titleText' style={{ display: 'inline' }}>系列文章</div>
        </div>

        <Placeholder height='16px' display='block' />
        <div>
          <Placeholder width='32px' display='inline-block' />
          <div className='smallTitleText' style={{ display: 'inline' }}>听君一席话，胜读十年书</div>
        </div>
      </div>

      <Placeholder height='26px' display='block' />

      <div className='tabs' style={{ fontSize: '14px', margin: '0 25px', backgroundColor: 'white' }}>
        <div style={{ fontWeight: 'bold', margin: '0 40px', height: '72px', lineHeight: '72px', whiteSpace: 'nowrap' }}>所属类目:</div>

        <div id='radioButtonGroup' className={allCategorsState}>
          <div onClick={changeCategory} value={-1} className='itemCategory' style={{ backgroundColor: currentCategorIndexState === -1 ? token.colorPrimary : 'white' }}>&nbsp;{`全部`}&nbsp;</div>
          {categorys.map((v, i) => {
            return <div onClick={changeCategory} value={i} className='itemCategory' style={{ backgroundColor: currentCategorIndexState === i ? token.colorPrimary : 'white' }}>&nbsp;{v}&nbsp;</div>;
          })}
        </div>

        <div onClick={changeShowHidden} style={{ marginLeft: 'auto', color: token.colorPrimary, marginRight: '40px', height: '72px', lineHeight: '72px', whiteSpace: 'nowrap' }} >{allCategorsState === 'hidden' ? '展开' : '收起'}&nbsp;{allCategorsState === 'hidden' ? <DownOutlined /> : <UpOutlined />}</div>
      </div>

      <Placeholder height='24px' display='block' />

      <div style={{ flexGrow: '1', margin: '0 25px' }}>
        <div id='contentBox' onScroll={() => {
          let e = document.getElementById('contentBox');
          if ((e.scrollHeight >= e.clientHeight ? true : false) && (e.scrollHeight - e.scrollTop === e.clientHeight)) {
            console.log('update');
          }
        }}>
          {
            currentCategorIndexState === -1 ? (
              articleList.map((v) => {
                return v.map((vv) => {
                  return (
                    <ArticleBox
                      className={'itemContent'}
                      img={vv.imgUrl}
                      bigTitle={vv.bigTitle}
                      littleTitle={vv.littleTitle}
                      articleUrl={vv.articleUrl}
                    />
                  );
                })
              })) : articleList.length > currentCategorIndexState ? articleList[currentCategorIndexState].map((v) => {
                return (
                  <ArticleBox
                    className={'itemContent'}
                    img={v.imgUrl}
                    bigTitle={v.bigTitle}
                    littleTitle={v.littleTitle}
                    articleUrl={v.articleUrl}
                  />
                );
              }) : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;