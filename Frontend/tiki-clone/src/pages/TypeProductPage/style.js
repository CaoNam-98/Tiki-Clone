import styled from "styled-components";
import { Col } from "antd";

export const WrapperProducts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
`;

export const WrapperNavbar = styled(Col)`
  background: #fff;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  height: fit-content;
`;
