import Mock from 'mockjs'

Mock.mock(RegExp("/registerUserName.*"),'get',{//判断用户名是否重名?username=xxx
    "succ":true,
    "data":false//true用户名重名
})
Mock.mock(RegExp("/getEducationArea.*"),'get',{//获取教育领域或选课意向
    "succ":true,
    "data":["IT·互联网","设计·创作","电商·营销","职业·考证","升学·考研","兴趣·生活","语言·留学"]
})
Mock.mock(RegExp("/groupNameBottom.*"),'get',{//判断机构名是否重名?username=xxx
    "succ":true,
    "data":false//true机构名重名
})
Mock.mock(RegExp("/getProvince.*"),'get',{//获取店面地址
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
Mock.mock(RegExp("/groupRegisterFinish"),'post',(post)=>{//教育机构注册是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true注册成功
  }
})
Mock.mock(RegExp("/teacherID.*"),'get',{//身份证号是否已经注册?username=xxx
    "succ":true,
    "data":false//true身份证已经注册
})
Mock.mock(RegExp("/teacherRegisterFinish"),'post',(post)=>{//个人教师注册是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true注册成功
  }
})
Mock.mock(RegExp("/studentRegisterFinish"),'post',(post)=>{//学生家长注册是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true注册成功
  }
})
Mock.mock(RegExp("/login"),'post',(post)=>{//登录
  console.log(post.body)
  return {
    "succ":true,
    "data":"type1"
    //error1用户名或密码错误,error2等待审核,error3审核未通过
    //type1个人教师/教育机构,type2学生家长
  }
})
Mock.mock(RegExp("/getNewsList.*"),'get',()=>{//新闻内容
  return {
    "succ":true,
    "data":[
              {
                "key":"1",
                "title":"1贸易争端加剧困境 美国农民：人生艰难，别再“豆”我了",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "username":"新华社新闻",
                "time":["2019-06-05","18:24"],
                "commentCount":"1"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境 美国农民：人生艰难，别再“豆”我了",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "username":"新华社新闻",
                "time":["2019-06-05","18:24"],
                "commentCount":"1"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境 美国农民：人生艰难，别再“豆”我了",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "username":"新华社新闻",
                "time":["2019-06-05","18:24"],
                "commentCount":"1"
              }
          ]
  }
})
Mock.mock(RegExp("/getVideosList.*"),'get',()=>{//视频内容
  return {
    "succ":true,
    "data":[
              {
                "key":"1",
                "title":"1贸易争端加剧困境",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "username":"新华社新闻",
                "commentCount":"1"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "username":"新华社新闻",
                "commentCount":"1"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "username":"新华社新闻",
                "commentCount":"1"
              }
          ]
  }
})
Mock.mock(RegExp("/getSearchList.*"),'get',()=>{//搜索内容?search=xxx
  return {
    "succ":true,
    "data":[
              {
                "key":"1",
                "title":"1[周二开课]我要学产品-90天产品经理实战班(3天体验班)",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "cost":"0",
                "person":"12"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "cost":"200",
                "person":"35"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "cost":"300",
                "person":"12"
              }
          ]
  }
})
Mock.mock(RegExp("/getSearchDetail.*"),'get',()=>{//搜索内容详情?key=xxx
  return {
    "succ":true,
    "data":{
      "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "title":"贸易争端加剧困境",
      "cost":"300",
      "person":"500",
      "grade":"5.0",
      "type":"type1",//教育机构type1,教师type2
      "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "username":"贸易争端",
      "userIntro":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境",
      "comments":[
      {
        "username":"aaaaa",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
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
        "fileSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
      }
      ]
    }
  }
})
Mock.mock(RegExp("/getInformation.*"),'get',()=>{//搜索内容详情-资料?username=xxx
  return {
    "succ":true,
    "data":{
      "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "username":"贸易争端",
      "userIntro":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境",
      "course":[
              {
                "key":"1",
                "title":"1[周二开课]我要学产品-90天产品经理实战班(3天体验班)",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "cost":"0",
                "person":"12"
              },
              {
                "key":"2",
                "title":"2贸易争端加剧困境",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "cost":"200",
                "person":"35"
              },
              {
                "key":"3",
                "title":"3贸易争端加剧困境",
                "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
                "cost":"300",
                "person":"12"
              }
          ],
      "publish":["关于贸易争端加剧困境的通知","2019-6-17","13:14"]
    }
  }
})
Mock.mock(RegExp("/getNewsDetail.*"),'get',()=>{//新闻详情?newsKey=xxx
  return {
    "succ":true,
    "data":{
      "title":"贸易争端加剧困境",
      "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "username":"新华社新闻",
      "time":["2019-06-05","18:24"],
      "content":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境",
      "comments":[
      {
        "username":"aaaaa",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
        "time":["2019-0605","49:55"],
        "comment":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境"
      }
      ]
    }
  }
})
Mock.mock(RegExp("/postComment"),'post',(post)=>{//data发布的内容,username发布者
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true发布成功
  }
})
Mock.mock(RegExp("/getUserImg.*"),'get',()=>{//?username=xxx
  return {
    "succ":true,
    "data":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
  }
})
Mock.mock(RegExp("/getVideosDetail.*"),'get',()=>{//?videosKey=xxx
  return {
    "succ":true,
    "data":{
      "title":"贸易争端加剧困境",
      "videoSrc":"https://media.w3.org/2010/05/sintel/trailer.mp4",
      "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "username":"新华社新闻",
      "time":["2019-06-05","18:24"],
      "comments":[
      {
        "username":"aaaaa",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
        "time":["2019-0605","49:55"],
        "comment":"贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境,贸易争端加剧困境"
      }
      ]
    }
  }
})
Mock.mock(RegExp("/getTry.*"),'get',()=>{
  return {
    "succ":true,
    "data":[
    { "key":"1",
      "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "title":"1贸易争端加剧困境",
      "type":"生活·艺术",
      "apply":[
        {
        "key":"1",
        "username":"aaaaa1",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
      },
      {
        "key":"2",
        "username":"aaaaa2",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
      },
      {
        "key":"3",
        "username":"aaaaa3",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
      }
      ]
    },
    { "key":"2",
      "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "title":"2贸易争端加剧困境",
      "type":"生活·艺术",
      "apply":[
        {
        "key":"1",
        "username":"aaaaa1",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
      },
      {
        "key":"2",
        "username":"aaaaa2",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
      },
      {
        "key":"3",
        "username":"aaaaa3",
        "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
      }
      ]
    }
    ]
  }
})
Mock.mock(RegExp("/agree"),'post',(post)=>{//试听同意
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true同意结果成功
  }
})
Mock.mock(RegExp("/disAgree"),'post',(post)=>{//试听同意
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true拒绝结果成功
  }
})
Mock.mock(RegExp("/getMyCourseList.*"),'get',()=>{//课程列表
  return {
    "succ":true,
    "data":[
    {
      "key":"1",
      "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "title":"1贸易争端加剧困境",
      "type":"生活·艺术",
      "time":"2019-6-17"
    },
    {
      "key":"2",
      "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "title":"2贸易争端加剧困境",
      "type":"生活·艺术",
      "time":"2019-6-17"
    }
    ]
  }
})
Mock.mock(RegExp("/deleteCourse.*"),'get',()=>{//删除课程?key=xxx
  return {
    "succ":true,
    "data":true//true删除成功
  }
})
Mock.mock(RegExp("/addCourseFinish"),'post',(post)=>{//添加课程是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true添加成功
  }
})
Mock.mock(RegExp("/getList"),'get',{//获取课程领域
    "succ":true,
    "data":["IT·互联网","设计·创作","电商·营销","职业·考证","升学·考研","兴趣·生活","语言·留学"]
})
Mock.mock(RegExp("/getFixCourse.*"),'get',{//获取修改课程?key=xxx
    "succ":true,
    "data":{
      "courseName":"课程名称",
      "eduArea":"电商·营销",
      "ageL":"5",
      "ageH":"100",
      "money":"5000",
      "month":"1"
    }
})
Mock.mock(RegExp("/fixCourseFinish"),'post',(post)=>{//修改课程是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true成功
  }
})
Mock.mock(RegExp("/getPage3CourseDetail"),'post',(post)=>{//课程详细信息
  console.log(post.body)
  return {
    "succ":true,
    "data":[
    {
      "key":"1",
      "courseName":"第一次课",
      "place":"上课地点",
      "time":"2019-06-07 12:00",
      "long":"45",
      "teacher":"上课老师",
      "homeWork":"第一次作业.doc"
    },
    {
      "key":"2",
      "courseName":"第二次课",
      "place":"上课地点",
      "time":"2019-06-07 12:00",
      "long":"45",
      "teacher":"上课老师",
      "homeWork":"第二次作业.doc"
    }
    ]
  }
})
Mock.mock(RegExp("/deleteCourseDetail"),'post',(post)=>{//删除小课程是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true成功
  }
})
Mock.mock(RegExp("/changeCourseDetail"),'post',(post)=>{//修改小课程是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true成功
  }
})
Mock.mock(RegExp("/addCourse"),'post',(post)=>{//添加小课程是否成功
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true成功
  }
})
Mock.mock(RegExp("/getCourseTableList.*"),'get',()=>{//获取课程表?username=xxx
  return {
    "succ":true,
    "data":[
    {
      "key":"1",
      "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "title":"课程名称1",
      "eduArea":"电商·营销",
      "time":"2019-6-18 13:00",
      "place":"上课地点",
      "teacher":"任课教师"
    },
    {
      "key":"2",
      "imgSrc":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "title":"课程名称2",
      "eduArea":"电商·营销",
      "time":"2019-6-18 13:00",
      "place":"上课地点",
      "teacher":"任课教师"
    }
    ]
  }
})
Mock.mock(RegExp("/getTableList.*"),'get',()=>{//获取课程表7天,?username=xxx
  return {
    "succ":true,
    "data":{
      "day1":[["2019","06-24","星期一"]],
      "day2":[["2019","06-25","星期二"]],
      "day3":[["2019","06-26","星期三"]],
      "day4":[["2019","06-27","星期四"],["16:00","课程安排课程安排课程安排",""]],
      "day5":[["2019","06-28","星期五"]],
      "day6":[["2019","06-29","星期六"],["16:00","课程安排课程安排课程安排",""],["18:00","课程安排课程安排课程安排",""]],
      "day7":[["2019","06-30","星期日"]]
    }
  }
})
Mock.mock(RegExp("/getUserInfo.*"),'get',()=>{//获取用户信息,?username=xx
  return {
    "succ":true,
    "data":{
      "username":"xx教育机构",
      "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg"
    }
  }
})
Mock.mock(RegExp("/addNewPhoto.*"),'post',(post)=>{//上传新头像
  console.log(post.body)
  return {
    "succ":true,
    "data":true//上传成功
  }
})
Mock.mock(RegExp("/getMoreInfo.*"),'get',()=>{//获取更多个人信息,?username=xxx
  return {
    "succ":true,
    "data":{
      //type1个人教师
      // "type":"type1",
      // "username":"我的姓名",
      // "sex":"男",
      // "age":"22",
      // "id":"222222222222222222",
      // "eduArea":"IT·互联网",
      // "teachAge":"6年",
      // "ageL":"5",
      // "ageH":"99",
      // "tel":"13800000000"

      //type2教育机构
      "type":"type2",
      "username":"XXX教育机构",
      "eduArea":"IT·互联网",
      "place":"浙江 杭州 下城区",
      "detailPlace":"详细地址",
      "tel":"13800000000",
      "ageL":"5",
      "ageH":"99"
    }
  }
})
Mock.mock(RegExp("/editGroupFnish"),'post',(post)=>{//修改个人信息
  console.log(post.body)
  return {
    "succ":true,
    "data":true//修改成功
  }
})
Mock.mock(RegExp("/eidtTeacherFinish"),'post',(post)=>{//修改个人信息
  console.log(post.body)
  return {
    "succ":true,
    "data":true//修改成功
  }
})
Mock.mock(RegExp("/getPubList.*"),'get',{//我的通知?username=xxx
    "succ":true,
    "data":[
    {
      "key":"1",
      "title":"关于XXX的公告一",
      "type":"通知公告",
      "time":"2019-6-17 13:14"
    },
    {
      "key":"2",
      "title":"关于XXX的公告二",
      "type":"通知公告",
      "time":"2019-6-17 13:14"
    }
    ]
})
Mock.mock(RegExp("/deleteItem.*"),'get',()=>{//删除公告
  return {
    "succ":true,
    "data":true//删除成功
  }
})
Mock.mock(RegExp("/getPubDetail.*"),'get',()=>{//查看公告?username=xxx&key=xxx
  return {
    "succ":true,
    "data":{
      "title":"关于XX的通知",
      "type":"通知公告",
      "time":"2019-6-17 13:34",
      "content":"通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告"
    }
  }
})
Mock.mock(RegExp("/getPubTypeList.*"),'get',()=>{//获取公告类型
  return {
    "succ":true,
    "data":["通知公告","教学公示"]
  }
})
Mock.mock(RegExp("/editPubFinish"),'post',(post)=>{//编辑公告
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true编辑成功
  }
})
Mock.mock(RegExp("/getMyComment"),'get',()=>{//获得我的公告?username=xxx
  return {
    "succ":true,
    "data":[
    {
      "key":"1",
      "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "username":"我的名字",
      "time":"2019-0605 49:55",
      "comment":"16666",
      "courseImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "courseTitle":"1XXX课程",
      "personPhoto":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "personName":"1新闻发布者",
      "courseTime":"2019-06-05"
    },
    {
      "key":"2",
      "userImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "username":"我的名字",
      "time":"2019-0605 49:55",
      "comment":"26666",
      "courseImg":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "courseTitle":"2XXX课程",
      "personPhoto":"https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/www_chinanews_com/bbd1204d2e5093f5486f881371f3759b.jpg",
      "personName":"2新闻发布者",
      "courseTime":"2019-06-05"
    }
    ]
  } 
})
Mock.mock(RegExp("/deleteComment"),'post',(post)=>{//删除评论
  console.log(post.body)
  return {
    "succ":true,
    "data":true//true删除成功
  }
})