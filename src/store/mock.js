import Mock from 'mockjs'

Mock.mock(RegExp("/api/registerUserName.*"),'get',{//判断用户名是否重名?username=xxx
    "succ":true,
    "data":false//true用户名重名
})
Mock.mock(RegExp("/api/getEducationArea"),'get',{//获取教育领域或选课意向
    "succ":true,
    "data":["IT·互联网","设计·创作","电商·营销","职业·考证","升学·考研","兴趣·生活","语言·留学"]
})
Mock.mock(RegExp("/api/groupNameBottom.*"),'get',{//判断机构名是否重名?username=xxx
    "succ":true,
    "data":false//true机构名重名
})
Mock.mock(RegExp("/api/getProvince"),'get',{//获取店面地址
    "succ":true,
    "data":[
          {
            label: '浙江',
            value: '浙江',
            children: [
              {
                label: '杭州',
                value: '杭州',
                children: [
                  {
                    label: '西湖区',
                    value: '西湖区',
                  },
                  {
                    label: '上城区',
                    value: '上城区',
                  },
                  {
                    label: '江干区',
                    value: '江干区',
                  },
                  {
                    label: '下城区',
                    value: '下城区',
                  },
                ],
              },
              {
                label: '宁波',
                value: '宁波',
                children: [
                  {
                    label: 'xx区',
                    value: 'xx区',
                  },
                  {
                    label: 'yy区',
                    value: 'yy区',
                  },
                ],
              }
            ],
          },
        ],
    "defaultChoose":["浙江","杭州","上城区"]
})
Mock.mock(RegExp("/api/groupRegisterFinish"),'post',(post)=>{//教育机构注册是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true注册成功
  }
})
Mock.mock(RegExp("/api/teacherID.*"),'get',{//身份证号是否已经注册?username=xxx
    "succ":true,
    "data":false//true身份证已经注册
})
Mock.mock(RegExp("/api/teacherRegisterFinish"),'post',(post)=>{//个人教师注册是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true注册成功
  }
})
Mock.mock(RegExp("/api/studentRegisterFinish"),'post',(post)=>{//学生家长注册是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true注册成功
  }
})
Mock.mock(RegExp("/api/login"),'post',(post)=>{//登录
  console.log(post.body)
  return {
    "succ":true,
    "data":"type1"
    //error1用户名或密码错误,error2等待审核,error3审核未通过
    //type1个人教师/教育机构,type2学生家长
  }
})
Mock.mock(RegExp("/api/getNewsList"),'get',()=>{//新闻内容
  return {
    "succ":true,
    "data":[
              {
                "key":"1",
                "title":"1贸易争端加剧困境 美国农民：人生艰难，别再“豆”我了",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "username":"新华社新闻",
                "time":["2019-06-05","18:24"],
                "commentCount":"1"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境 美国农民：人生艰难，别再“豆”我了",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "username":"新华社新闻",
                "time":["2019-06-05","18:24"],
                "commentCount":"1"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境 美国农民：人生艰难，别再“豆”我了",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "username":"新华社新闻",
                "time":["2019-06-05","18:24"],
                "commentCount":"1"
              }
          ]
  }
})
Mock.mock(RegExp("/api/getVideosList"),'get',()=>{//视频内容
  return {
    "succ":true,
    "data":[
              {
                "key":"1",
                "title":"1贸易争端加剧困境",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "username":"新华社新闻",
                "commentCount":"1"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "username":"新华社新闻",
                "commentCount":"1"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "username":"新华社新闻",
                "commentCount":"1"
              }
          ]
  }
})
Mock.mock(RegExp("/api/getSearchList.*"),'get',()=>{//搜索内容?search=xxx
  return {
    "succ":true,
    "data":[
              {
                "key":"1",
                "title":"1[周二开课]我要学产品-90天产品经理实战班(3天体验班)",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "cost":"0",
                "person":"12"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "cost":"200",
                "person":"35"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "cost":"300",
                "person":"12"
              }
          ]
  }
})
Mock.mock(RegExp("/api/getSearchDetail.*"),'get',()=>{//搜索内容详情?key=xxx
  return {
    "succ":true,
    "data":{
      "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
      "title":"贸易争端加剧困境",
      "cost":"300",
      "person":"500",
      "grade":"5.0",
      "type":"type1",//教育机构type1,教师type2
      "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
      "username":"贸易争端",
      "userIntro":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境",
      "comments":[
      {
        "username":"aaaaa",
        "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
        "time":["2019-0605","49:55"],
        "comment":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境"
      }
      ],
      "dir":[
      {
        "title":"贸易争端加剧困境",
        "time":["2019-06-09","16:00","20分钟"],
        "des":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境贸易争端加剧困境",
        "fileName":"第一次作业.doc",
        "fileSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg"
      }
      ]
    }
  }
})
Mock.mock(RegExp("/api/getInformation.*"),'get',()=>{//搜索内容详情-资料?username=xxx
  return {
    "succ":true,
    "data":{
      "userImg":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
      "username":"贸易争端",
      "userIntro":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境",
      "course":[
              {
                "key":"1",
                "title":"1[周二开课]我要学产品-90天产品经理实战班(3天体验班)",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "cost":"0",
                "person":"12"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "cost":"200",
                "person":"35"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境",
                "imgSrc":"http://e0.ifengimg.com/10/2019/0618/C27FD4C00DFE944F58BBCD6AD90306C4F0C7A43C_size78_w1080_h720.jpeg",
                "cost":"300",
                "person":"12"
              }
          ],
      "publish":["关于贸易争端加剧困境的通知","2019-6-17","13:14"]
    }
  }
})