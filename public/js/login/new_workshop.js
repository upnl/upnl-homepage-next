$('#add_presenter_button').click(function() {
  $("[name='is_write']").val("");
});
$('#add_nonmember_button').click(function() {
  $("[name='is_write']").val("N");
});
$('#add_workshop_button').click(function() {
  $("[name='is_write']").val("Y");
});
$('.delete_presenter').click(function(){
  $("[name='is_write']").val($(this).data('index'));
});
$(function() {
  $("#presenter").chosen();
  $("#participants").chosen();
  $('.controls textarea').elastic();
});
