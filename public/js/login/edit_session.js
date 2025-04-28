$("#presentation").change(function() {
  $('.text_input').val($(this).val());
});
$(function() {
  $('.controls textarea').elastic();
});
