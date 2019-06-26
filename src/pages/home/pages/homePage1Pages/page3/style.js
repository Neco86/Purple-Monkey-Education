import styled from 'styled-components'
export const CourseWrapper = styled.div`
    height:100%;
    width:100%; 
    .add{
        height:38px;
        width:38px;
        position:fixed;
        bottom:100px;
        right:55px;
        font-size:38px;
        color:#c9f;
    }
`
export const MyCourseWrapper = styled.div`
    width:100%;
    height:100%;
`
export const CourseItemWrapper = styled.div`
    .top{
        height:100px;
        width:100%;
        border-bottom:1px solid #f2f2f2;
        padding:10px;
        background-color:white;
        img{
            width:160px;
            height:80px;
        }
        .right{
            height:80px;
            display:inline-block;
            padding-left:20px;
            position:relative;
            top:-25px;
            .title{
                font-size:16px;
                padding:5px 0;
            }
            .type{
                position:relative;
                top:10px;
            }
            .time{
                position:relative;
                top:15px;
            }
        }
    }
    .bottom{
        height:30px;
        width:100%;
        border-bottom:1px solid #f2f2f2;
        padding:10px;
        background-color:white;
        span{
            display:inline-block;
            padding-right:14px;
            line-height:10px;
        }
        .detail,.fix{
            color:#c9f;
        }
        .delete{
            color:#d9001b;
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
export const AddNewCourseWrapper = styled.div`
    .inputWrapper{
        padding-top:20px;
        background-color:white;
    }
    .file{
        input{
            padding-top:5px;
        }
    }
`
export const SelectWrapper = styled.div`
    position:absolute;
    width:100%;
    left:0;
    z-index:9;
    top:115px;
`