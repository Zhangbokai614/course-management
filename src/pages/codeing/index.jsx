import React from 'react';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import { Button } from 'antd';
import 'antd/dist/reset.css';

import './index.css'

class CodeEditor extends React.Component {
  onChange = (newValue) => {
    console.log("onChange", newValue); // eslint-disable-line no-console
  };

  editorDidMount = (editor) => {
    // eslint-disable-next-line no-console
    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };

  render() {
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: false,
    };

    return (
      <div>
        <hr />
        <MonacoEditor
          height="400"
          language="javascript"
          value=""
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          theme="vs-light"
        />
      </div>
    );
  }
}

const CodeingPage = () => (
  <div className='codeing-root'>
    <div className='editer'>
      <div className='editer-header'>
        <p>Editer</p>
        <Button type="primary">Python</Button>
      </div>
      <div className='editer-body'>
        <CodeEditor />
      </div>
    </div>
    <div className='output'>
      <p className='stdin-text'>Execution stdin</p>
      <div className='stdin'></div>
      <div className='compler'>Compler</div>
      <div className='stdout'></div>
      <div className='info-text'>info</div>
      <div className='info'></div>
    </div>
  </div>
);

export default CodeingPage;