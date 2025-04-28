function leave_project(uid, pid, method){
  $.ajax({
    url  : 'leave_project',
    type  : 'POST',
    cache  : false,
    data  : JSON.stringify({
      user_id    : uid,
      project_id  : pid,
      method    : method
    }),
    contentType  : 'application/json; charset=utf-8',
    dataType  : 'json',
    success  : function(data){
      alert('프로젝트에서 나가셨습니다.')
    },
    error  : function(){
      console.log('왜 못 나가지지...');
    }
  })
}

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
  $("#members").chosen();
  $('.controls textarea').elastic();
  $('#next_orderer').chosen();
});

function delete_screenshot(sname){
  $.ajax({
    url  : '/delete_screenshot'
    ,type  : 'POST'
    ,cache  : false
    ,data  : JSON.stringify({
      filename: sname
    })
    ,contentType  : 'application/json; charset=utf-8'
    ,dataType  : 'json'
    ,success  : function(data) {
      location.href = location.href;
    }
    ,error  : function(result){
      console.log('에러')
    }
  })
}
$('.delete-screenshot-button').click(function (){
  delete_screenshot($(this).data('name'))
});
$('.leave').click(function() {
  if (confirm('나가시겠습니까?') == true){
    leave_project(user_no, parseInt($(this).data('number')), 'POST');
    location.reload();
  }
});
$('.add_tag_button').click(function(){
  $(this).parent().parent().find('.add_tag_form').show();
});
$('.cancel_tag_button').click(function(){
  $('.tag_content').val('');
  $(this).parent().hide();
});
$('.project_intro').each(function (){
  var str = $(this).html()
  var linkedText = Autolinker.link(str);
  $(this).html(linkedText);
})
if (get_parameter.year)
  $('html, body').scrollTop($("#pending_projects").offset().top);
