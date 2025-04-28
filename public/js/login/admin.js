$('#정회원').show();
$('#OB_button').show();

function change_period(){
  var d = $('#period').val().split("-");
  $.ajax({
    url  : '/change_period'
    ,type  : 'POST'
    ,cache  : false
    ,data  : JSON.stringify({
      year: d[0],
      month: d[1],
      day: d[2]
    })
    ,contentType  : 'application/json; charset=utf-8'
    ,dataType  : 'json'
    ,success  : function(data){
      if(data.result){
        $('#success').show();
        $('#fail').hide();
      }
    }
    ,error    : function(data){
      $('#fail').show();
      $('#success').hide();
    }
  })
}

function make_board(){
  if($('#name').val() != ''){
    $.ajax({
      url  : 'make_board'
      ,type  : 'POST'
      ,cache  : false
      ,data  : JSON.stringify({
        boardname: $('#name').val()
      })
      ,contentType  : 'application/json; charset=utf-8'
      ,dataType  : 'json'
      ,success  : function(data){
        if(data.result){
          location.reload(true);
        }
        else{
          $('#fail_make').show();
        }
      }
      ,error    : function(result){
        console.log('에러')
      }
    })
  }
}

function change_boardname(bid, curr_name){
  var divid = '#changed_name_'+bid;
  if($(divid).val() != ''){
    $.ajax({
      url  : 'change_boardname'
      ,type  : 'POST'
      ,cache  : false
      ,data  : JSON.stringify({
        curr_name: curr_name,
        boardname: $(divid).val()
      })
      ,contentType  : 'application/json; charset=utf-8'
      ,dataType  : 'json'
      ,success  : function(data){
        if(data.result){
          location.reload(true);
        }
        else{
          $('#fail_change').show();
        }
      }
      ,error    : function(result){
        console.log('에러')
      }
    })
  }
}
function change_table(level) {
  $("#신입회원,#준회원,#정회원,#OB,#신입회원_button,#준회원_button,#정회원_button,#OB_button,#decline_button").hide();
  $("input:checkbox[name='change']").attr("checked", false);
  var divid = "#" + level;
  var next = {"신입회원": "준회원", "준회원": "정회원", "정회원": "OB", "OB": "정회원"};
  var buttondiv = "#" + next[level] + "_button";
  $(divid).show();
  $(buttondiv).show();
  if (level === "신입회원" || level === "준회원"){
    $('#decline_button').show();
  }
}

function accept_users() {
  var selected = [];
  $('input.accept:checked').each(function() {
    selected.push(this.value);
  });
  $.ajax({
    url  : '/accept_users'
    ,type  : 'POST'
    ,cache  : false
    ,data  : JSON.stringify({
      users: selected
    })
    ,contentType  : 'application/json; charset=utf-8'
    ,dataType  : 'json'
    ,success  : function(data) {
      if(data.result) {
        location.reload(true);
      }
    }
    ,error    : function(data) {
      console.log('에러')
    }
  })
}

function decline_users(kind) {
  var selected = [];
  if (kind == "wait_user"){
    $('input.accept:checked').each(function() {
      selected.push(this.value);
    });
  }
  if (kind == "user"){
    $('input.change:checked').each(function() {
      selected.push(this.value);
    });
  }
  $.ajax({
    url  : '/decline_users'
    ,type  : 'POST'
    ,cache  : false
    ,data  : JSON.stringify({
      users: selected
    })
    ,contentType  : 'application/json; charset=utf-8'
    ,dataType  : 'json'
    ,success  : function(data) {
      if(data.result) {
        location.reload(true);
      }
    }
    ,error    : function(data) {
      console.log('에러')
    }
  })
}

function change_users(level) {
  var selected = [];
  $('input.change:checked').each(function() {
    selected.push(this.value);
  });
  $.ajax({
    url  : '/change_users'
    ,type  : 'POST'
    ,cache  : false
    ,data  : JSON.stringify({
      users: selected,
      level: level
    })
    ,contentType  : 'application/json; charset=utf-8'
    ,dataType  : 'json'
    ,success  : function(data) {
      if(data.result) {
        location.reload(true);
      }
    }
    ,error    : function(data) {
      console.log('에러')
    }

  })
}

function change_password(){
  $.ajax({
    url  : 'change_pw'
    ,type  : 'POST'
    ,cache  : false
    ,data  : JSON.stringify({
      username: $('#username_selected').val(),
      new_passwd: $('#new_passwd').val()
    })
    ,contentType  : 'application/json; charset=utf-8'
    ,dataType  : 'json'
    ,success  : function(data){
      if(data.result){
        location.reload(true);
      }
      else{
        $('#fail_change_passwd').show();
      }
    }
    ,error    : function(result){
      console.log('에러');
    }
  })
}
