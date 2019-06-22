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
export const NewsDetailWrapper = styled.div`
    .wrapper{
        padding:20px 25px;
        background-color:white;
        .news{
            mrgin-bottom:5px;
            .title{
                font-size:20px;
                font-weight:800;
            }
            .publisher{
                margin:10px 0;
                color:#aaaaaa;
                img{
                    width:15px;
                    height:15px;
                    border-radius:50%;
                    display:inline-block;
                    position: relative;
                    top: 2px;
                }
                span{
                    display:inline-block;
                    margin-left:5px;
                }
            }
            .content{
                p{
                    text-indent:2em;
                }
            }
        }
    }
    .bottom{
        height:45px;
        width:100%;
        background-color:white;
        position:fixed;
        bottom:0;
        left:0;
        border-top:1px solid #d7d7d7;
        padding:5px 20px;
        padding-right:80px;
        input{
            border:none;
            outline:none;
            border-radius:15px;
            background-color:#f2f2f2;
            width:100%;
            height:100%;
        }
        .right{
            position: absolute;
            top:15px;
            right:20px;
            .iconfont{
                color:#cc99ff;
            }
        }
    }
    .comment{
        height:140px;
        width:100%;
        background-color:white;
        position:fixed;
        bottom:0;
        left:0;
        padding:10px;
        textarea{
            height:85px;
            width:100%;
            border:none;
            background-color:#f2f2f2;
            border-radius:5px;
        }
        .cbottom{
            margin-top:15px;
            color:black;
            .right{
                height:25px;
                width:50px;
                line-height:25px;
                text-align:center;
                color:white;
                background-color:#cc99ff;
                border-radius:5px;
                margin-top:-5px;
            }
        }
    }
`
export const VideosDetailWrapper = styled.div`
    background-color:white;
    .video{
        width:100%;
        height:180px;
        background-color:#f2f2f2;
        video{
            display:block;
            width:100%;
            height:100%;
        }
    }
    .publisher{
        padding:10px 20px;
        img{
            width:15px;
            height:15px;
            border-radius:50%;
        }
        span{
            margin-left:5px;
            color:#aaaaaa;
        }
    }
    .bottom{
        height:45px;
        width:100%;
        background-color:white;
        position:fixed;
        bottom:0;
        left:0;
        border-top:1px solid #d7d7d7;
        padding:5px 20px;
        input{
            border:none;
            outline:none;
            border-radius:15px;
            background-color:#f2f2f2;
            width:100%;
            height:100%;
        }
    }
    .comment{
        height:140px;
        width:100%;
        background-color:white;
        position:fixed;
        bottom:0;
        left:0;
        padding:10px;
        textarea{
            height:85px;
            width:100%;
            border:none;
            background-color:#f2f2f2;
            border-radius:5px;
        }
        .cbottom{
            margin-top:15px;
            color:black;
            .right{
                height:25px;
                width:50px;
                line-height:25px;
                text-align:center;
                color:white;
                background-color:#cc99ff;
                border-radius:5px;
                margin-top:-5px;
            }
        }
    }
`