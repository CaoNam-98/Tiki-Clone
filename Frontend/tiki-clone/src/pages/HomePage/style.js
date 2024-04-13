import styled from 'styled-components';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    border-bottom: 1px solid transparent;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        background: rgb(13, 92, 182);
        & span {
            color: #fff;
        }
    }
`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    background-color: rgb(239, 239, 239);
    padding: 0px 0px;
`

export const WrapperContentProduct = styled.div`
    background-color: #efefef,
    padding: 0 0px,
    width: 1270px;
    margin-left: auto;
    margin-right: auto;
`