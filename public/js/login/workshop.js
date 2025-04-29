$('.add_tag_button').click(function(){
  $(this).parent().parent().find('.add_tag_form').show();
});
$('.cancel_tag_button').click(function(){
  $('.tag_content').val('');
  $(this).parent().hide();
});
var selected = $('#workshop_list_content > div:nth-last-child(' + (Math.floor((workshop_show_nth - 1) / 5) + 2) +')')
$(selected).find('.workshop_element').show();
$(selected).find('.list_switch').html('-');
$('.session_content').each(function (){
  var str = $(this).html()
  var linkedText = Autolinker.link(str);
  $(this).html(linkedText);
})
