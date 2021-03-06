import styled from 'styled-components'
export const MyPageWrapper = styled.div`
    height:100%;
    width:100%; 
    .user{
        height:100px;
        width:100%;
        background-color:white;
        border-bottom:1px solid #f2f2f2;
        padding:20px 25px;
        .arrow{
            float:right;
            transform:rotate(180deg);
            font-size:25px;
            line-height:50px;
            color:#f0f0f0;
        }
        img{
            display:inline-block;
            width:50px;
            height:50px;
            border-radius:50%;
        }
        .username{
            display:inline-block;
            position:relative;
            top:-15px;
            left:15px;
        }
    }
    .func{
        height:80px;
        width:100%;
        background-color:white;
        border-bottom:1px solid #f2f2f2;
        margin-bottom:5px;
        overflow:hidden;
        .item{
            width:33%;
            height:100%;
            float:left;
            text-align:center;
            padding-top:25px;
            .bottom{
                margin-top:4px;
            }
            .iconfont{
                display:inline-block;
                height:16px;
                overflow:hidden;
            }
            .comment{
                font-size: 14px;
                position: relative;
                top: 2px;
            }
        }
    }
    .feedback,.about{
        height:45px;
        width:100%;
        background-color:white;
        border-bottom:1px solid #f2f2f2;
        border-top:1px solid #f2f2f2;
        padding:0 30px;
        line-height:45px;
        .arrow{
            float:right;
            transform:rotate(180deg);
            color:#f0f0f0;
        }
    }
    .icon{
        position:relative;
        .iconfont{
           font-size:130px;
           color:#ccc; 
           position:absolute;
           left:50%;
           margin-top:80px;
           margin-left:-65px;
        }
    }
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
export const AlertBg = styled.div`
  background-color:black;
  opacity:0.3;
  width:100%;
  height:100%;
`
export const AlertWrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:998;
  .alert{
    position:fixed;
    width:280px;
    height:160px;
    top:50%;
    left:50%;
    margin-top:-60px;
    margin-left:-140px; 
    background-color:white;
    z-index:999;
    border-radius:10px;
    text-align:center;
    box-sizing:border-box;
    padding:10px;
    text-align:center;
    .button{
        width:190px;
        height:40px;
        line-height:40px;
        text-align:center;
        background-color:#c9f;
        color:white;
        display:inline-block;
    }
  }
  .iconfont{
    display:inline-block;
    margin-top:8px;
  }
  .bigPhoto{
    position:fixed;
    top:35%;
    left:0;
    background-color:white;
    z-index:999;
    img{
        width:100%;
    }
  }
`
export const MyInfoWrapper = styled.div`
    .navBarWrapper{
        position:relative;
        .fix{
            position:absolute;
            right:20px;
            top: 0;
            z-index: 99;
            color: white;
            height:45px;
            line-height:45px;
        }
    }
    .inputWrapper{
        background-color:white;
        padding-top:15px;
    }
`
export const InputWrapper = styled.div`
  height:55px;
  display:flex;
  padding:0 15px;
  label{
    width:5rem;
    line-height:35px;
  }
  input{
    box-sizing:border-box;
    width:100%;
    height:35px;
    border:none;
    outline:none;
    padding-left:10px;
    font-size:16px;
    border-radius:5px;
    background-color:#f9f9f9;
  }
  span{
    position:absolute;
    top:36px;
    left:0;
    color:#d9001b;
  }
`
export const PubWrapper = styled.div`
    .add{
        width:40px;
        height:40px;
        color:#c9f;
        font-size:40px;
        position:fixed;
        bottom:100px;
        right:50px;
    }
    .item{
        height:110px;
        background-color:white;
        .top{
            padding:20px 15px;
            .title{
                margin-bottom:15px;
                font-size:18px;
            }
            .left{
                float:left;
            }
            .right{
                float:right;
            }
        }
        .bottom{
            overflow:hidden;
            border-bottom:1px solid #f2f2f2;
            border-top:1px solid #f2f2f2;
            padding:5px 0;
            .left{
                float:left;
                width:50%;
                text-align:center;
                color:#c9f;
            }   
            .right{
                float:left;
                width:50%;
                text-align:center;
                color:#d9001b;
            }
        }
    }
`
export const PubDetailWrapper = styled.div`
    .navBarWrapper{
        position:relative;
        .fix{
            position:absolute;
            right:20px;
            top: 0;
            z-index: 99;
            color: white;
            height:45px;
            line-height:45px;
        }
    }
    .item{
        background-color:white;
        .top{
            height:85px;
            padding:20px;
            border-bottom:1px solid #f2f2f2;
            .title{
                font-size:18px;
                margin-bottom:15px;
            }
            .left{
                float:left;
            }
            .right{
                float:right;
            }
        }
        .bottom{
            padding:20px;
            text-indent:2em;
        }
    }
`
export const EditInputWrapper = styled.div`
    padding-top:15px;
    background-color:white;
`
export const SelectWrapper = styled.div`
    position:absolute;
    width:100%;
    top:120px;
    left:0;
    z-index:9;
`
export const MyCommentWrapper = styled.div`
    .item{
        height:175px;
        width:100%;
        padding:10px;
        background-color:white;
        margin-bottom:5px;
        overflow:hidden;
    }
    .top{
        height:35px;
        img{
            height:35px;
            width:35px;
            border-radius:50%;
        }
        .userPhoto{
            float:left;
            height:35px;
            width:35px;
        }
        .user{
            padding:0;
            float:left;
            height:35px;
            width:auto;
            margin-left:5px;
            margin-top:1px;
            line-height:17px;
            .time{
                color:#aaa;
            }
        }
        .iconfont{
            float:right;
            font-size:18px;
            line-height:35px;
        }
        overflow:hidden;
    }
    .middle{
        height:35px;
        line-height:35px;
        font-size:16px;
    }
    .bottom{
        height:85px;
        background-color:#f2f2f2;
        position:relative;
        img{
            height:85px;
            width:130px;
        }
        .left{
            float:left;
        }
        .right{
            float:left;
            padding:5px 15px;
            span{
                color:#aaa;
            }
            .title{
                font-size:18px;
                height:45px;
            }
            .source{
                height:30px;
                img{
                    width:15px;
                    height:15px;
                    border-radius:50%;
                }
                .time{
                    position:absolute;
                    right:20px;
                    bottom:18px;
                    color:#aaa;
                }
            }
        }
    }
`
export const SettingWrapper = styled.div`
    .item{
        height:35px;
        padding:10px 20px;
        background-color:white;
        border-top:1px solid #f2f2f2;
        border-bottom:1px solid #f2f2f2;
        .left{
            float:left;
        }
        .right{
            float:right;
        }
        .center{
            text-align:center;
            color:#c9f;
        }
        .iconfont{
            font-size:20px;
            color:#c9f;
            line-height:15px;
        }
    }
`
export const AboutWrapper= styled.div`
    img{
        width:130px;
        position:absolute;
        top:115px;
        left:50%;
        margin-left:-65px;
    }
    .contentWrapper{
        width:286px;
        position:absolute;
        top:320px;
        left:50%;
        margin-left:-143px;
        color:white;
        text-indent:2em;
        font-size:14px;
        line-height:16px;
        div{
            margin-bottom:15px;
        }
    }
`