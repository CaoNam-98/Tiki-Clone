import React from "react";
import { WrapperLabelText, WrapperTextValue, WrapperTextPrice } from "./style";
import { WrapperContent } from "./style";
import { Checkbox } from "antd";
import { Rate } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option, index) => {
          return <WrapperTextValue key={index}>{option}</WrapperTextValue>;
        });

      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option, index) => {
              return (
                <Checkbox key={index} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );

      case "star":
        return options.map((option, index) => {
          return(
          <div style={{ display: 'flex', gap: '4px'}}>
            <Rate
              style={{ fontSize: "12px" }}
              disabled
              key={index}
              defaultValue={option}
            />
            <span>{`Lu ${option} sao`}</span>
          </div>);
        });

        case 'price':
            return options.map((option, index) => {
                return (
                    <WrapperTextPrice>{option}</WrapperTextPrice>
                )
            })

      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "Tivi", "Máy giặt"])}
        {renderContent("checkbox", [
          { label: "A", value: "a" },
          { label: "B", value: "b" },
        ])}
        {renderContent("star", [3, 4, 5])}
        {renderContent("price", ["duoi 40.000", "tren 50.000"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
