import styled from 'styled-components'
export const SearchWrapper = styled.div`
    width:100%;
    height:55px;
    background-color:white;
    padding:10px 0;
    position:fixed;
    top:0;
    overflow:hidden;
    label{
        width:2rem;
    }
`
export const TabWrapper = styled.div`
    .am-tabs-tab-bar-wrap{
        position:fixed;
        top:55px;
        width:100%;
        z-index:2;
    }
    .am-tabs-content-wrap{
        padding-top:50px;
        z-index:1;
    }
`