$(function(){
  //配置环形禁用效果
//Nprogress.configure({showSpinner:false});
//开始加载
//Nprogress.start();
//加载完成
//Nprogress.done();
//这里需要监控后台调用ajax的进度，当ajax开始调用时，注册事件ajaxStart，开启进度条。当ajax调用结束时，注册事件ajaxEnd，关闭进度条。
// $(document).ajaxStart(function(){
//   Nprogress.stat();
// })
// $(document).ajaxEnd(function(){
 
  //模拟浏览器延迟效果，这里用setTimeout
//   setTimeout(function(){
//     Nprogress.done();
//   }, 500);
// });
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
})



