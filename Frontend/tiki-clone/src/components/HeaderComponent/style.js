import styled from 'styled-components';
import { Row } from 'antd';

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(26, 148, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`

export const WrapperTextHeader = styled.span`
    font-size: 1.8rem;
    color: #fff;
    font-weight: bold;
    text-align: left;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    height: 40px;
    color: #fff;
    line-height: 1.2;
`

export const WrapperHeaderCart = styled.div`
   display: flex;
   color: #fff; 
   align-items: center;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
`

export const WrapperCartNumber = styled.span`
    position: absolute;
    color: rgb(255, 255, 255);
    background: rgb(255, 66, 79);
    padding: 5px;
    border-radius: 50%;
    padding: 1px 5px;
    right: -8px;
    top: -4px;
`
