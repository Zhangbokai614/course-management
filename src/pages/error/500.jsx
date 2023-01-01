import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const ServerErrorPage = (props) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/", { replace: true });
  };

  return (
    <Result
      status="500"
      title="500"
      subTitle={props.text}
      extra={
        <Button
          type="primary"
          onClick={() => {
            goTo();
          }}
        >
          Back Home
        </Button>
      }
    />
  );
};

export default ServerErrorPage;
