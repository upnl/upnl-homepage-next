function checkid(){
        if($('input[name=id]').val() != ''){
                $.ajax({
                        url     : '/check_name'
                        ,type   : 'POST'
                        ,cache  : false
                        ,data   : JSON.stringify({
                                username: $('input[name=id]').val()
                        })
                        ,contentType    : 'application/json; charset=utf-8'
                        ,dataType       : 'json'
                        ,success        : function(data) {
                                username = $('input[name=id]').val();
				if(data.result == 'rejoin')
				{
				  alert(username + '는 이전에 가입한 적이 있던 아이디입니다. 이전 가입 시의 비밀번호와 이름을 입력해주세요.');
				  $('input[name=id_check]').val('Y');
				}
				else if(data.result) {
                                  $('input[name=id_check]').val('Y');
                                }
                                else {
                                  alert(username + '는 사용할 수 없는 아이디입니다. 다른 아이디를 사용하세요.');
                                  $('input[name=id_check]').val('');
                                }
                        }
                        ,error          : function(result) {
                                alert('에러')
                        }
                })
        }
}

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

	$('.error textarea').keyup(function() {
		if($(this).val().length !== 0) {
			clear_error($(this), '');
		}
	});

	$('#passwd').keyup(function() {
		if($(this).val().length === 0) {
			set_error($(this), '필수항목입니다.');
		}
		else {
			clear_error($(this), '');
			var $confirm = $('#confirm')
			if($(this).val() !== $confirm.val()) {
				if($confirm.val().length !== 0) {
					set_error($confirm, '비밀번호가 일치하지 않습니다.')
				}
			}
			else {
				clear_error($confirm, '');
			}
		}
	});

	$('#confirm').keyup(function() {
		if($(this).val().length === 0) {
			set_error($(this), '필수항목입니다.');
		}
		else if($(this).val() !== $('#passwd').val()) {
			set_error($(this), '비밀번호가 일치하지 않습니다.')
		}
	});

	function set_error($field, message) {
		$field.parent().parent().addClass('error');
		$field.siblings('span.help-inline').text(message);
	}

	function clear_error($field, message) {
		$field.parent().parent().removeClass('error');
		$field.siblings('span.help-inline').text(message);
	}
});
