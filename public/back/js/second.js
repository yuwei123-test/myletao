$(function(){
  var currentPage= 1;
   var pageSize = 5;
//进入页面首先渲染一次
//render();
  //发送Ajax请求，获取后台数据，对页面进行渲染
  // function render(){
   
  //  $.ajax({
  //    url:,
  //    type:,
  //    data:,
  //    dataType:'json',
  //    success:function(info){
  //      console.log(info);
  //      //在html页面创建模板
  //      var htmlstr = template('secondTpl',info);
  //      //把数据放入坑中
  //      $('.us_content tbody').html(htmlstr);
  //      //在渲染后，进行分页插件初始化
  //      $('.pagination').bootstrappaginator({
  //        //配置bootstrap版本号
  //        bootstrapMajorVersion:3,
  //        //当前页
  //        currentPage:page,
  //        //总页数
  //        totalPages:Math.ceil(info.total/info.size),
  //        //回调函数  每个页码的点击事件
  //        onPageClicked:function(a,b,c,page){
  //           //获取点击的当前页
  //           currentPage=page;
  //           //重新渲染页面
  //           render();
  //        }
  //      })
  //    }
  //  })
  // }


  //1.显示模态框
  $('#addtpl').on('click',function(){
    $('#addModal').modal('show');
  })
  //1.1 发送Ajax请求，渲染请求一级分类的下拉菜单


  //1.2 通过事件委托，给下拉菜单中的a注册点击事件，将点击的a的text赋值给请选择一级分类的按钮，并把id赋值给隐藏域的val
  //隐藏域获取到值后，可以手动将表单校验状态更改成VALID 参数1.字段 参数2.校验状态 参数3.配置规则，来配置我们的提示文本
  // $('#form').data('bootstrpValidator').updateStatus('categoryId','VALID');

  //1.3 配置图片上传初始化
 // $('#fileupload').fileupload({
   //指定数据类型
   //dataType:'json',
   //配置回调函数，当图片上传完成，响应回来时调用
   // done:function(e,data){
     // console.log(data);
      //获取图片上传成功的地址

     // var picaddr = data.result.picAddr;
      //将图片地址设置给img
     // $('#imgbox img').attr('src',picaddr);
      //将图片地址设置给隐藏域
     // $('[name="categoryUrl"]').val(picaddr);
      //重置表单校验状态
      // $('#form]').data('bootstrapValidator').updateStatus('categoryUrl','VALID');
      
    //}
  //})

 //2.进行表单校验
 $('#form').bootstrapValidator({
   //将默认的排除项，重置掉（默认对：hidden ：disabled排除）
   excluded:[],
   //配置图标
   feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  //配置校验字段列表
  fields:{
    categoryId:{
      //校验规则
      validators:{
      notEmpty:{
        message:'请选择一级分类'
      }
      }
    },
    categoryName:{
      validators:{
        notEmpty:{
          message:'请输入二级分类'
        }
      }
      
    },
    categoryUrl:{
      validators:{
        notEmpty:{
          message:'请上传图片'
        }
      }
      
    },
    
  }
 })
 //给表单注册表单校验成功时间 success.form.bv
 $('#form').on('success.form.bv',function(e){
e.preventDefault();//阻止表单提交，通过ajax提交
//发送ajax请求 获取表单数据
// $.ajax({
//   url:,
//   type:,
//   data:,//$('#form).serilize()
//   dataType:'json',
//   success:function(info){
//   console.log(info);
  //在渲染第一页之前，先要关闭模态框并清除表单内容
  //$('#addModal').modal('hide');
  //重置普通表单内容和校验状态
  // $('#form').data('bootstrapValidator').resetForm(true);
  //请选择一级分类的按钮和图片无法通过普通表单重置，需要手动重置
  // $('#dropdownText').text('请选择一级分类');
  // $('#imgbox img').attr('src','./images/none.png');
  //调用render()函数，渲染页面  而且是渲染第一页
  
  //}
//})
 })

})