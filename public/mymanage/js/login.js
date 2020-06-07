$(function(){
  $('form').bootstrapValidator({
    
    // 表单框里右侧的icon
    feedbackIcons: {
      　　　　　　　　valid: 'glyphicon glyphicon-ok',
      　　　　　　　　invalid: 'glyphicon glyphicon-remove',
      　　　　　　　　validating: 'glyphicon glyphicon-refresh'
    },
    
    fields: {
      username: {
        
        validators: {
          notEmpty: {
            message: '用户名不能为空'
          },
          stringLength: {  //长度限制
            min: 2,
            max: 6,
            message: '用户名长度必须在2到6位之间'
          },
          callback: {
            message:'用户名不存在'
          }
        
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: '密码不能为空'
          },
          stringLength: {  //长度限制
            min: 6,
            max: 12,
            message: '密码长度必须在2到6位之间'
          },
          callback : {
            message: '密码错误'
          }
        }  
      }
    }
  });
  //注册表单校验成功事件
  $('#form').on('success.form.bv',function(e){
   //阻止默认的提交 使用ajax进行表单提交
   e.preventDefault();
   
   $.ajax({
     type: 'post',
     url: '/employee/employeeLogin',
     data: $('#form').serialize(),
     dataType: 'json',
     success:function(info){
      console.log(info);
      if(info.success){
        // alert('登录成功')
        location.herf = 'index.html'
      }
      if(info.error==1000){
        // alert('用户名不存在')
        $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
      }
      if(info.error==1001){
        // alert('密码错误')
        $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback')
      }
     }
   })
  });
  //重置功能实现
  $('[type="reset"]').click(function(){
    console.log(111);
    //除了要重置文本还要重置校验状态
    $('#form').data('bootstrapValidator').resetForm();
    
  })
})