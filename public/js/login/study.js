$('.add_tag_button').click(function(){
  $(this).parent().parent().find('.add_tag_form').show();
});
$('.cancel_tag_button').click(function(){
  $('.tag_content').val('');
  $(this).parent().hide();
});
$('.study_about').each(function(){
  var str = $(this).html();
  var linkedText = Autolinker.link(str);
  $(this).html(linkedText);
});
