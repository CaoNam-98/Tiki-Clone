import React from "react";
import { StyleNameProduct, WrapperPriceText, WrapperReportText, WrapperDiscountText, WrapperCardStyle } from "./style";
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <div style={{ marginRight: '4px'}}>
          <span>4.5</span>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <span> | Đã bán 1000+</span>
        </div>
        
        <WrapperPriceText>
          <span style={{ marginRight: '8px'}}>1.000.000đ</span>
          <WrapperDiscountText>-5%</WrapperDiscountText>
          </WrapperPriceText>
      </WrapperReportText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
