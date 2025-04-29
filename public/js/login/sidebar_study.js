var working_study_list = false;
var pending_study_list = false;
$('#working_study_list').hide();
$('#pending_study_list').hide();
$('#working_study_switch').click(function() {
  if (!working_study_list) {
    working_study_list = true;
    $('#working_study_list').show();
    $('#working_study_switch').html('-');
  }
  else {
    working_study_list = false;
    $('#working_study_list').hide();
    $('#working_study_switch').html('+');
  }
});
$('#pending_study_switch').click(function() {
  if (!pending_study_list) {
    pending_study_list = true;
    $('#pending_study_list').show();
    $('#pending_study_switch').html('-');
  }
  else {
    pending_study_list = false;
    $('#pending_study_list').hide();
    $('#pending_study_switch').html('+');
  }
});
