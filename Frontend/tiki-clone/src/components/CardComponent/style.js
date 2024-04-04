import styled from "styled-components";
import { Card } from "antd";

export const WrapperCardStyle = styled(Card)`
  // width: 200px;
  position: relative;
  & img {
    width: 200px;
    height: 200px;
  }
  & .ant-card-body {
    padding: 10px;
  }
`;

export const StyleNameProduct = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 4px;
  flex: 1 1 0%;
  font-weight: 400;
`;

export const WrapperDescProduct = styled.div`
  padding: 10px;
`;

export const WrapperReportText = styled.div`
  font-size: 10px;
  color: rgb(128, 128, 137);
`;

export const WrapperPriceText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0 0;
`;
export const WrapperDiscountText = styled.span`
  color: rgb(255, 66, 78);
  font-size: 12px;
  font-weight: 500;
`;
