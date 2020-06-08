$(function(){
  //实现分类管理的二级分类的切换功能
  $('.category').on('click',function(){
    $(this).next().stop().slideToggle();
  })
  //配置首页头部导航条功能
$('.icon-menu').on('click',function(){
 
  $('.id_aside').toggleClass('now');
  $('.id_main .topBar').toggleClass('now');
  $('.id_main').toggleClass('now');
})


// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.querySelector('.echarts1'));

// 指定图表的配置项和数据
var option1 = {
    title: {
        text: '2017年注册人数'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);

var myChart2 =  echarts.init(document.querySelector('.echarts2'));

option2 = {
  title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center'
  },
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
          ],
          emphasis: {
              itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};
myChart2.setOption(option2);

//模态框
//让模态框显示
$('.icon-logout').on('click',function(){
 
    $('#logoutModal').modal('show');
})

//给退出按钮注册点击事件  点击时，让模态框消失并且回到登录页
$('#logout').on('click', function(){
    $('#logoutModal').modal('hide');
  //访问退出接口，进行退出
  $.ajax({
      type:'get',
      url:'/employee/employeeLogout',
      dataType:'json',
      success:function(info){
          console.log(info);
          if(info.success){
              location.href = 'login.html'
          }
          
      }
  })
})

})