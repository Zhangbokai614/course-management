import React, { useState } from "react";
import {
  Row,
  Col,
  Select,
  theme,
  Typography,
  Space,
  Input,
  Layout,
  Button,
  Popover,
  Dropdown,
  message,
} from "antd";
import {
  ReloadOutlined,
  LeftOutlined,
  RightOutlined,
  CaretRightOutlined,
  DownOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import MonacoEditor from "react-monaco-editor/lib/editor";
import { useLoaderData, useLocation } from "react-router-dom";
import { useKeyPress } from "ahooks";
import "antd/dist/reset.css";

import languages from "./languages";
import compare from "./compare";
import "./index.css";

export async function loader({ params }) {
  // mock api
  const result = {
    example: [
      {
        title: "testing A",
        code: "print('Hello world')",
        text: "Good morning! Here's your coding interview problem for today.",
        finish: true,
      },
      {
        title: "testing B",
        code: "let testing = 'Hello world'",
        text: "What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.",
        finish: false,
      },
    ],
    startExample: 2,
  };
  return result;
}

const defaultLanguages = languages[0].value;
const { useToken } = theme;
const { Text, Title } = Typography;
const { TextArea } = Input;
const { Content, Sider } = Layout;

const CoursePage = () => {
  const { token } = useToken();
  const location = useLocation();
  const loaderData = useLoaderData();
  const example = loaderData.example;

  console.log(location.state);

  const [collapsed, setCollapsed] = useState(false);
  const [language, setLanguage] = useState(defaultLanguages);
  const [currentCompares, setCurrentCompares] = useState(compare[language]);
  const [currentExample, setCurrentExample] = useState(0);
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [info, setInfo] = useState("");
  const [runButtonContent, setRunButtonContent] = useState(
    <CaretRightOutlined />
  );

  const selectHandleChange = (value) => {
    setLanguage(value);

    setCurrentCompares(compare[value]);
  };

  const onChangeCode = (newValue) => {
    setCode(newValue);
  };

  const runCode = () => {
    const result = { output: "Example: " + code, info: code.length };

    setOutput(result.output);
    setInfo(result.info);
  };

  const editorDidMount = (editor) => {};

  const changeExample = ({ key }) => {
    setCurrentExample(+key);
  };

  const finish = () => {
    // api
    message.success("The current chapter is completed");
    nextExample();
  };

  const nextExample = () => {
    if (currentExample < example.length - 1) {
      setCurrentExample(currentExample + 1);
    }
  };

  const prevExample = () => {
    if (currentExample > 0) {
      setCurrentExample(currentExample - 1);
    }
  };

  useKeyPress(["alt.enter"], () => {
    runCode();
  });

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

  const dropdownMenu = example.map((item, index) => {
    return {
      key: index + "",
      label: <Text>{index + 1 + ". " + item.title}</Text>,
    };
  });
  console.log(dropdownMenu);

  return (
    <Layout style={{ margin: margin, borderRadius: borderRadius, padding: 0 }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        collapsedWidth={0}
        trigger={
          collapsed ? (
            <RightOutlined style={{ width: "10px" }} />
          ) : (
            <LeftOutlined style={{ width: "10px" }} />
          )
        }
        zeroWidthTriggerStyle={{
          marginTop: "36vh",
          width: "14px",
          height: "6vh",
          backgroundColor: token.colorBgContainer,
          boxShadow: token.boxShadow,
          marginRight: "26px",
        }}
        theme="light"
        width="22vw"
        style={{
          backgroundColor: token.colorBgLayout,
          borderRadius: borderRadius,
          padding: padding,
          paddingRight: 0,
          paddingLeft: collapsed ? 0 : padding,
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
          <Col span={12}>
            <Title className="text" ellipsis level={4}>
              Example
            </Title>
          </Col>
          <Col span={12}>
            <Row justify="end">
              <Dropdown
                arrow={true}
                menu={{
                  items: dropdownMenu,
                  onClick: changeExample,
                  selectable: true,
                }}
              >
                <Space>
                  <Text ellipsis type="secondary">
                    {example[currentExample].title}
                  </Text>
                  <DownOutlined />
                </Space>
              </Dropdown>
            </Row>
          </Col>
        </Row>
        <Row className="editor-body" justify="space-between" style={boxStyle}>
          <MonacoEditor
            className="monaco-editor"
            width="100%"
            height="40%"
            language={language}
            value={example[currentExample].code}
            options={{
              readOnly: true,
              overviewRulerBorder: false,
              minimap: { enabled: false },
            }}
            theme="vs-light"
          />
          <Col>{example[currentExample].text}</Col>
          <Row
            style={{ width: "100%", alignItems: "flex-end" }}
            justify="space-between"
            align="middle"
          >
            <Button
              type="primary"
              size="small"
              onClick={() => {
                prevExample();
              }}
            >
              <LeftOutlined />
            </Button>
            <Text type="secondary" wrap={false}>
              {currentExample + 1} / {example.length}
            </Text>
            <Space justify="end">
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  nextExample();
                }}
              >
                <RightOutlined />
              </Button>
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  finish();
                }}
                style={{
                  backgroundColor: token.colorSuccess,
                }}
              >
                <CheckOutlined />
              </Button>
            </Space>
          </Row>
        </Row>
      </Sider>
      <Content>
        <Row
          className="codeing-root"
          wrap={false}
          style={{
            borderRadius: borderRadius,
            backgroundColor: token.colorBgLayout,
            padding: padding,
            marginLeft: collapsed ? 0 : margin,
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
              <Col span={collapsed ? 19 : 18}>
                <Text className="text" ellipsis type="secondary">
                  Editor
                </Text>
              </Col>
              <Col span={collapsed ? 5 : 6}>
                <Row wrap={false} justify="end">
                  <Space size={16}>
                    <Select
                      defaultValue={defaultLanguages}
                      onChange={selectHandleChange}
                      options={languages}
                    />
                    <Popover content={"Alt + Enter"}>
                      <Button
                        type="primary"
                        onMouseLeave={() => {
                          setRunButtonContent(<CaretRightOutlined />);
                        }}
                        onMouseMove={() => {
                          setRunButtonContent("Run");
                        }}
                        onClick={() => {
                          runCode();
                        }}
                        style={{
                          width: "58px",
                        }}
                      >
                        {runButtonContent}
                      </Button>
                    </Popover>
                  </Space>
                </Row>
              </Col>
            </Row>
            <Row className="editor-body" style={boxStyle}>
              <MonacoEditor
                className="monaco-editor"
                height="100%"
                language={language}
                value=""
                options={monacoOptions}
                onChange={onChangeCode}
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
              style={{ ...boxStyle, height: "10vh" }}
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
            <Row className="info" style={boxStyle}>
              <Text>{info}</Text>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CoursePage;
