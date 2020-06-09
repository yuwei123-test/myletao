$(function(){
  $('#addtpl').on('click',function(){
    $('#addModal').modal('show');
  });
  //表单校验
 $('#form').bootstrapValidator({
//配置图标
feedbackIcons: {
  valid: 'glyphicon glyphicon-ok',
  invalid: 'glyphicon glyphicon-remove',
  validating: 'glyphicon glyphicon-refresh'
},
//校验的字段
fields: {
  categoryName:{
    //校验规则
    validators:{
      //非空校验：
      notEmpty:{
        //输入提示信息
        message:'请输入一级分类名称'
      }
    }
  }
}
 })

})