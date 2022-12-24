import React from "react";
import { Button } from "antd";
import "antd/dist/reset.css";

const CoursePage = (props) => {
  console.log(props.context);

  return (
    <div className="App">
      <Button type="primary">course</Button>
    </div>
  );
};

export default CoursePage;
