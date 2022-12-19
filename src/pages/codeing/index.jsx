import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import { Select } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

import languages from './languages';
import compare from './compare';
import './index.css'

const defaultLanguages = languages[0].value

const CodeingPage = () => {
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

  const options = {
    selectOnLineNumbers: true,
    roundedSelection: true,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
    overviewRulerBorder: false,
    folding: true,
  };

  return (
    <div className='codeing-root'>
      <div className='editor'>
        <div className='header'>
          <p className='text' >Editor</p>
          <Select
            defaultValue={defaultLanguages}
            style={{ width: "10vw" }}
            onChange={selectHandleChange}
            options={languages}
          />
        </div>
        <div className='editor-body'>
          <MonacoEditor
            className={'monaco-editor'}
            height="80vh"
            language={language}
            value=""
            options={options}
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
        <div className='stdin'></div>
        <div className='compler'>
          <p className='text'>Compler</p>
          <Select
            defaultValue={currentCompares[0]}
            style={{ width: "10vw" }}
            options={currentCompares}
          />
          <p className='text'>State</p>
          <ReloadOutlined/>
        </div>
        <div className='stdout'></div>
        <p className='text'>Info</p>
        <div className='info'></div>
      </div>
    </div>
  );
};

export default CodeingPage;