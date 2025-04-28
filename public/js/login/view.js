lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});
$.ajax({
  url  : '/find_prevnext'
  ,type  : 'POST'
  ,cache  : false
  ,data  : JSON.stringify({
    article_id: article_no
  })
  ,contentType  : 'application/json; charset=utf-8'
  ,dataType  : 'json'
  ,success  : function(data) {
    if (data.next_aid != -1) {
      var url_next = "<a href="+data.next_aid+">다음글</a>"
      $('#to_next').html(url_next);
      $('#to_next_span').html('|');
    }
    else {
      $('#to_next').hide();
    }
    if (data.prev_aid != -1) {
      var url_prev = "<a href="+data.prev_aid+">이전글</a>"
      $('#to_prev').html(url_prev);
      $('#to_prev_span').html('|');
    }
    else {
      $('#to_prev').hide();
    }
  }
  ,error    : function(result) {
    console.log('에러')
  }
});

$("#move").click(function() {
  $.ajax({
    url : '/move_article'
    ,type : 'POST'
    ,cache : false
    ,data : JSON.stringify({
      aid : article_no,
      bid : $("#boardlist").val()
    })
    ,contentType : 'application/json; charset=utf-8'
    ,dataType : 'json'
    ,success : function(data) {
      if (data.result) {
        location.reload();
      }
      else {
        $("#move_fail").show();
      }
    }
    ,error : function() {
      $("#move_fail").show();
    }
  });
});

$('#add_tag_button').click(function() {
  $('#add_tag').show();
})
$('#cancel_tag_button').click(function() {
  $('#add_tag').hide();
})

if (assenter.indexOf(user) > 0) {
  $("#purchase_cancel").show();
  $("#purchase_agree").hide();
}

$('#article_file_list_button').click(function(){
  var file_list = $('#article_file_list')
  if ($(file_list).css('display') === 'none'){
    $(file_list).css('display', 'inline-block')
  } else {
    $(file_list).css('display', 'none')
  }
})
