import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import { Select, theme } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

import languages from './languages';
import compare from './compare';
import './index.css'

const defaultLanguages = languages[0].value
const { useToken } = theme;


const CodeingPage = () => {
  const { token } = useToken();

  const [language, setLanguage] = useState(defaultLanguages);
  const [currentCompares, setCurrentCompares] = useState(compare[language]);

  const selectHandleChange = (value) => {
    setLanguage(value)

    setCurrentCompares(compare[value])
  }

  const onChange = (newValue) => {
    console.log("onChange", newValue);
  };

  const editorDidMount = (editor) => {
    console.log(editor)
  };

  const monacoOptions = {
    selectOnLineNumbers: true,
    roundedSelection: true,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
    overviewRulerBorder: false,
    folding: true,
  };

  const boxStyle = {
    borderRadius: token.borderRadius,
    backgroundColor: token.colorBgContainer,
    color: token.colorTextSecondary,
  }

  return (
    <div
      className='codeing-root'
      style={{
        borderRadius: token.borderRadius,
        backgroundColor: token.colorBgLayout,
        color: token.colorTextSecondary,
      }}
    >
      <div className='editor' style={{ borderRadius: token.borderRadius }}>
        <div className='header'>
          <p className='text' >Editor</p>
          <Select
            defaultValue={defaultLanguages}
            style={{ width: "10vw" }}
            onChange={selectHandleChange}
            options={languages}
          />
        </div>
        <div className='editor-body' style={boxStyle}>
          <MonacoEditor
            className={'monaco-editor'}
            height="80vh"
            language={language}
            value=""
            options={monacoOptions}
            onChange={onChange}
            editorDidMount={(editor) => editorDidMount(editor)}
            theme="vs-light"
          />
        </div>
      </div>
      <div className='output'>
        <div className='header'>
          <p className='text'>Execution stdin</p>
        </div>
        <div className='stdin' style={boxStyle}></div>
        <div className='compler'>
          <p className='text'>Compler</p>
          <Select
            key={currentCompares[0].value}
            defaultValue={currentCompares[0].label}
            style={{ width: "10vw" }}
            options={currentCompares}
            showSearch={true}
          />
          <p className='text'>State</p>
          <ReloadOutlined />
        </div>
        <div className='stdout' style={boxStyle}></div>
        <p className='text'>Info</p>
        <div className='info' style={boxStyle}></div>
      </div>
    </div>
  );
};

export default CodeingPage;