import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, borderRadius: 0 }}
      />
      <Button
        size={size}
        icon={
          <SearchOutlined color={colorButton} style={{ color: colorButton }} />
        }
        bordered={bordered}
        style={{
          backgroundColor: backgroundColorButton,
          borderRadius: 0,
          color: colorButton,
          border: !bordered && "none",
        }}
      >
        <span>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
