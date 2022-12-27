import React, { useState } from "react";
import { Row, Col, Select, theme, Typography, Space, Input } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import MonacoEditor from "react-monaco-editor/lib/editor";
import "antd/dist/reset.css";

import languages from "./languages";
import compare from "./compare";
import "./index.css";

const defaultLanguages = languages[0].value;
const { useToken } = theme;
const { Text } = Typography;
const { TextArea } = Input;

const CodeingPage = (props) => {
  const changePage = props.changePage;
  let execing = false;
  let aboutExec = "";

  const { token } = useToken();

  const [language, setLanguage] = useState(defaultLanguages);
  const [currentCompares, setCurrentCompares] = useState(compare[language]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [info, setInfo] = useState("");

  const selectHandleChange = (value) => {
    setLanguage(value);

    setCurrentCompares(compare[value]);
  };

  const onChange = (newValue) => {
    aboutExec = newValue;

    if (!execing) {
      execing = true;
      const currentExec = aboutExec;
      const result = {
        output: "Example: " + currentExec,
        info: currentExec.length,
      };
      execing = false;

      setOutput(result.output);
      setInfo(result.info);

      if (currentExec !== aboutExec) {
        onChange(aboutExec);
      }
    }
  };

  const editorDidMount = (editor) => {
    console.log(editor);
  };

  const padding = token.paddingXS;
  const margin = token.marginSM;
  const borderRadius = token.borderRadius;

  const boxStyle = {
    borderRadius: borderRadius,
    backgroundColor: token.colorBgContainer,
    padding: padding,
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

  return (
    <Row
      className="codeing-root"
      wrap={false}
      style={{
        borderRadius: borderRadius,
        backgroundColor: token.colorBgLayout,
        margin: margin,
        padding: padding,
      }}
    >
      <Col
        className="editor"
        span={18}
        style={{
          height: "100%",
          paddingRight: padding,
        }}
      >
        <Row
          className="codeing-header"
          align="middle"
          wrap={false}
          style={{
            padding: padding,
          }}
        >
          <Col span={20}>
            <Text
              className="text"
              ellipsis
              type="secondary"
              onClick={() => {
                changePage("Course", { id: 1123456 });
              }}
            >
              Editor
            </Text>
          </Col>
          <Col span={4}>
            <Select
              defaultValue={defaultLanguages}
              onChange={selectHandleChange}
              options={languages}
            />
          </Col>
        </Row>
        <Row className="editor-body" style={boxStyle}>
          <MonacoEditor
            className="monaco-editor"
            height="100%"
            language={language}
            value=""
            options={monacoOptions}
            onChange={onChange}
            editorDidMount={(editor) => editorDidMount(editor)}
            theme="vs-light"
          />
        </Row>
      </Col>
      <Col
        className="output"
        span={6}
        style={{
          paddingLeft: padding,
        }}
      >
        <Row
          className="codeing-header"
          align="middle"
          wrap={false}
          style={{
            padding: padding,
          }}
        >
          <Text className="text" ellipsis type="secondary">
            Execution stdin
          </Text>
        </Row>
        <TextArea
          className="stdin"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=""
          autoSize={{ minRows: 3, maxRows: 3 }}
          bordered={false}
          allowClear={true}
          style={{...boxStyle, height: '10vh'}}

        />
        <Space
          size={16}
          className="compler"
          align="center"
          wrap={false}
          style={{
            padding: padding,
          }}
        >
          <Text className="text" ellipsis type="secondary">
            Compler
          </Text>
          <Select
            key={currentCompares[0].value}
            defaultValue={currentCompares[0].label}
            style={{ width: "10vw" }}
            options={currentCompares}
            showSearch={true}
          />
          <Text className="text" ellipsis type="secondary">
            State
          </Text>
          <ReloadOutlined />
        </Space>
        <Row className="stdout" style={boxStyle}>
          <Space direction="vertical" size="middle">
            <Text>program stdout: </Text>
            <Text>{output}</Text>
          </Space>
        </Row>
        <Text
          className="text info-text"
          ellipsis
          type="secondary"
          style={{ padding: padding }}
        >
          Info
        </Text>
        <Col flex={1}>
          <Row className="info" style={boxStyle}>
            <Text>{info}</Text>
          </Row>
        </Col>
      </Col>
    </Row>
  );
};

export default CodeingPage;
