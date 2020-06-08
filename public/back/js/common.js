//配置环形禁用效果
Nprogress.configure({showSpinner:false});
//开始加载
//Nprogress.start();
//加载完成
//Nprogress.done();
//这里需要监控后台调用ajax的进度，当ajax开始调用时，注册事件ajaxStart，开启进度条。当ajax调用结束时，注册事件ajaxEnd，关闭进度条。
$(document).ajaxStart(function(){
  Nprogress.stat();
})
$(document).ajaxEnd(function(){
 
  //模拟浏览器延迟效果，这里用setTimeout
  setTimeout(function(){
    Nprogress.done();
  }, 500);
})


