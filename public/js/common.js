function getparticipantinfo(uid, pid, method){
	$.ajax({
		url	: 'get_participants_info'
		,type	: 'POST'
		,cache	: false
		,data	: JSON.stringify({
			user_id: uid,
			project_id: pid,
			method: method
		})
		,contentType	: 'application/json; charset=utf-8'
		,dataType	: 'json'
		,success	: function(data){
			if(method == 'w') {
				var divid = 'member_'+pid;
				$("#"+divid).html('참가자 수 : '+data.count+'명');
			}
			else {
				var divid = 'member_'+pid;
				var result = '멤버 : '+data.name+' 외 '+data.count+'명';
				$("#"+divid).html(result);
			}
		}
		,error		: function(result){
			console.log('에러')
		}
	})
}

function countlength(){
	var intro_length = $('#introduction').val().length;
	$('#length').val(intro_length + "/200");
}

$(function(){
  $('form').submit(function(){
    var submitBtn = $("button[name='submit']", $(this));
    var setEnableFunc = function() {
      submitBtn.attr('disabled', false).removeClass(
        'disabledButton'
      );
    };
    submitBtn.attr('disabled', true).addClass(
      'disabledButton'
    );

    // 3초 뒤에는 다시 submit 가능하게 만듦
    setTimeout(setEnableFunc, 3000);
  });
});
