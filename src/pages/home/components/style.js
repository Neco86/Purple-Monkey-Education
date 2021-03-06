import styled from 'styled-components'
export const TabWrapper = styled.div`
    .am-tabs-default-bar-tab-active{
        color:#cc99ff;
    }
    .am-tabs-default-bar-underline{
        border:1px solid #cc99ff;
    }
`
export const NewsWrapper = styled.div`
    height:130px;
    width:100%;
    padding:8px 20px;
    border-bottom:1px solid #f2f2f2;
    background-color:white;
    .newsTop{
        height:90px;
        display:flex;
        .left,.right{
            display:inline-block;
        }
        .left{
            width:190px;
            height:100%;
            text-align: justify;
            font-size:16px;
            padding-top:9px;
            padding-right:15px;
        }
        .right{
            flex:1;
            overflow:hidden;
            .img{
                display:inline-block;
                width:100%;
                height:80px;
                background-color:#f9f9f9;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
    .newsBottom{
        height:24px;
        .img{
            display:inline-block;
            overflow:hidden;
            height:20px;
            width:20px;
            border-radius:50%;
            position:relative;
            top:4px;
            margin-right:4px;
            background-color:#f9f9f9;
            img{
                    width:100%;
                    height:100%;
                }
        }
        span{
            margin-right:15px;
            color:#aaaaaa;
        }
    }

`
export const NoItemWrapper=styled.div`
    .no{
        margin:55px auto;
        text-align:center;
        width:170px;
        color:#d7d7d7;
        .iconfont{
            font-size:80px;
            
        }
    }
`
export const VideosWrapper = styled.div`
    height:225px;
    width:100%;
    background-color:white;
    margin-bottom:10px;
    .videosTop{
        position:relative;
        height:180px;
        .img{
            display:inline-block;
            width:100%;
            height:100%;
            background-color:#f9f9f9;
            img{
                width:100%;
                height:100%;
            }
        }
        .title{
            position:absolute;
            top:10px;
            left:18px;
            font-size:16px;
            color:white;
        }
        .iconfont{
            font-size:50px;
            color:white;
            position:absolute;
            top:50%;
            left:50%;
            margin-left:-25px;
            margin-top:-25px;
        }
    }
    .videosBottom{
        height:45px;
        .left{
            float:left;
            .img{
                display:inline-block;
                background-color:#f9f9f9;
                width:30px;
                height:30px;
                border-radius:50%;
                margin-left:20px;
                margin-right:10px;
                position:relative;
                top:8px;
                overflow:hidden;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .right{
            float:right;
            line-height:45px;
            margin-right:20px;
            .iconfont{
                margin-right:5px
            }
        }
    }

`
export const SearchItemWrapper = styled.div`
    height:65px;
    width:100%;
    box-sizing:border-box;
    display:flex;
    overflow:hidden;
    margin-bottom:10px;
    div{
        display:inline-block;
    }
    .left{
        width:115px;
        padding-left:15px;
        img{
            width:100%;
            height:100%;
        }
    }
    .right{
        flex:1;
        padding-right: 15px;
        padding-left: 10px;
        position:relative;
        .left{
            position:absolute;
            bottom:0;
            left:0;
            color:#cc99ff;
        }
        .right{
            position:absolute;
            bottom:0;
            right:0;
            color:#aaaaaa;
        }
    }
`