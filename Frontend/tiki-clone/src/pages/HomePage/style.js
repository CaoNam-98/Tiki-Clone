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
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`