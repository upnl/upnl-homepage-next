$(function() {
  $('.required').keyup(function() {
    if($(this).val().length === 0) {
      set_error($(this), '필수항목입니다.');
    }
    else {
      clear_error($(this), '');
    }
  });
  $('.required').focus(function() {
    if($(this).val().length === 0) {
      set_error($(this), '필수항목입니다.');
    }
    else {
      clear_error($(this), '');
    }
  });
  $('#passwd').keyup(function() {
    checkcurrentpw();
  });
  $('#new_passwd').keyup(function() {
    if($('#passwd').val().length === 0) {
      if($(this).val().length === 0) {
	clear_error($('#passswd'), '');
	$('#check_passwd').val('Y');
      }
      else {
	set_error($('#passwd'), '현재 비밀번호를 입력하세요');
	$('#check_passwd').val('');
      }
    }
    else if ($('#check_passwd').val() == 'Y') {
      if($(this).val().length < 4 || $(this).val().length > 20) {
	set_error($(this), '4자 이상 20자 이하로 입력해주세요');
	$('#check_length').val('');
      }
      else {
	clear_error($(this), '');
	$('#check_length').val('Y');
      }
      if($(this).val() !== $('#confirm').val()) {
	set_error($('#confirm'), '비밀번호가 일치하지 않습니다.');
      }
      else {
	clear_error($('#confirm'), '');
      }
    }
  });
  $('#confirm').keyup(function() {
    if($('#passwd').val().length === 0) {
      if($(this).val().length === 0) {
	clear_error($('#passwd'), '');
	$('#check_passwd').val('Y');
      }
      else {
	set_error($('#passwd'), '현재 비밀번호를 입력하세요');
	$('#check_passwd').val('');
      }
    }
    else if ($('#check_passwd').val() == 'Y') {
      if($(this).val() !== $('#new_passwd').val()) {
	set_error($(this), '비밀번호가 일치하지 않습니다.');
      }
      else {
	clear_error($(this), '');
      }
    }
  });
  $('#theme').change(function() {
    if($('#theme').val() === 'custom') {
      $('#custom_theme_group').show();
    } else {
      $('#custom_theme_group').hide();
    }
  });
  $('.controls textarea').elastic()

  function set_error($field, message) {
    $field.parent().parent().addClass('error');
    $field.siblings('span.help-inline').text(message);
  }
  function clear_error($field, message) {
    $field.parent().parent().removeClass('error');
    $field.siblings('span.help-inline').text(message);
  }
  function checkcurrentpw(){
    var uid = user_no;
    if($('#passwd').val() != '') {
      $.ajax({
	url  : '/check_pw'
	,type  : 'POST'
	,cache  : false
	,data  : JSON.stringify({
	  passwd: $('#passwd').val(),
	  user_id: uid
	})
	,contentType  : 'application/json; charset=utf-8'
	,dataType  : 'json'
	,success  : function(data){
	  if(data.result){
	    clear_error($('#passwd'), '');
	    $('#check_passwd').val('Y');
	  }
	  else{
	    set_error($('#passwd'), '비밀번호가 틀립니다');
	    $('#check_passwd').val('');
	  }
	}
	,error    : function(result){
	  console.log('에러')
	}
      })
    }
  }
});
