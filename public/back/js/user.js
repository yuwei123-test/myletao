$(function(){
  //通过ajax请求数据
  var currentPage = 1;
  var pageSize = 5;
  $.ajax({
    url:'/user/queryUser',
     type:'get',
     dataType:'json',
     data:{
       page:currentPage,
       pageSize:pageSize
     },
     success:function(info){
      console.log(info);
      var htmlStr = template('tpl',info);
      $('.us_content tbody').html(htmlStr);
     }
  })
})