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
export const NewsPageWrapper = styled.div`
    
`
export const VideosPageWrapper = styled.div`
    
`
export const FullScreenWrapper = styled.div`
    height:100%;
    width:100%;
    position:fixed;
    z-index:999;
    background-color:#f9f9f9;
    overflow:hidden;
    top: 0;
    bottom:0;
    overflow-y:scroll;
    overflow-x:hidden;
`
export const SearchResultWrapper = styled.div`
    .result{
        color:#aaaaaa;
        margin:15px;
    }
`
export const SearchDetailWrapper = styled.div`
    .itemWrapper{
        padding:15px;
        border-bottom:1px solid #f9f9f9;
        background-color:white;
    }
    .img{
        width:80px;
        height:80px;
        border-radius:50%;
        overflow:hidden;
        background-color:#f9f9f9;
        margin-top:15px;
        display:inline-block;
        img{
            width:100%;
            height:100%;
        }
    }
    
`
export const InformationWrapper = styled.div`
    
`