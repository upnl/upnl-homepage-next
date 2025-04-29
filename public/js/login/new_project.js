function checkext(input){
  if($('#thumbnail').val() != ''){
    $.ajax({
      url  : '/check_ext'
      ,type  : 'POST'
      ,cache  : false
      ,data  : JSON.stringify({
        filename: $('#thumbnail').val()
      })
      ,contentType  : 'application/json; charset=utf-8'
      ,dataType  : 'json'
      ,success  : function(data){
        if(data.result){
          $('#allowed').val('Y');
          readURL(input);
        }
        else{
          $('#allowed').val('');
        }
      }
      ,error    : function(result){
        console.log('에러')
      }
    })
  }
}

function readURL(input){
  if (input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
      $('#preview').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$(function() {
  $("#thumbnail").change(function() {
    checkext(this);
    $('#text_input').val($(this).val());
  });
  $('#text_input').elastic();
  $('.controls textarea').elastic();
});
