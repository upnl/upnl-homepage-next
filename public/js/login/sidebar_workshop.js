$('.workshop_element').hide();
$('.workshop_category').click(function() {
  if ($(this).parent().find('.list_switch').html() === '+'){
    $(this).parent().find('.workshop_element').show();
    $(this).parent().find('.list_switch').html('-');
  }
  else {
    $(this).parent().find('.workshop_element').hide();
    $(this).parent().find('.list_switch').html('+');
  }
});
