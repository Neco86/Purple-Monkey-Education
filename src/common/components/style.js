import styled from 'styled-components'
export const NavBarWrapper = styled.div`
   height:45px;
   width:100%;
   background-color:#cc99ff;
   color:white;
   line-height:45px;
   overflow:hidden;
   div{
    width:75px;
   }
   i{
    font-size:20px;
    margin-right:5px;
   }
   span{
    position:relative;
    top:-2px;
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
export const SelectWrapper = styled.div`
  height:55px;
  display:flex;
  padding:0 15px;
  label{
    width:5rem;
    line-height:35px;
  }
  .choose{
    box-sizing:border-box;
    width:100%;
    height:35px;
    line-height:35px;
    color:grey;
    border:none;
    outline:none;
    padding-left:10px;
    font-size:16px;
    border-radius:5px;
    background-color:#f9f9f9;
    .iconfont{
      display:inline-block;
      float:right;
      margin-right:10px;
      transform:rotate(270deg);
    }
  }
  ul{
    box-sizing:border-box;
    width:100%;
    height:35px;
    line-height:35px;
    color:grey;
    border:none;
    outline:none;
    font-size:16px;
    border-radius:5px;
    background-color:#f9f9f9;
    position:absolute;
    top:0;
    li {
      color:black;
      padding-left:10px;
      background-color:#f9f9f9;
    }
    li:nth-child(1){
      border-radius:5px 5px 0 0;
    }
    li:nth-last-child(1){
      border-radius:0 0 5px 5px;
    }
  }
  span{
    position:absolute;
    top:36px;
    left:0;
    color:#d9001b;
  }
`