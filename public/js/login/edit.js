$("[name*='submit']").click(function (){
  $("input[name*='is_write']").val('Y');
});
$("#file_input").change(function() {
  $('.text_input').val($(this).val());
});
