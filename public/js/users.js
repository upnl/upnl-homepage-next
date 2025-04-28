$("#user_level .level_filter").click(function (){
  $(".list tr").hide();
  $(".list tr:first, .list tr." + $(this).data('level')).show();
  $("#user_level span").removeClass("selected");
  $(this).addClass("selected");
});
$("#show_all_user").click(function (){
  $(".list tr").show();
  $("#user_level span").removeClass("selected");
  $(this).addClass("selected");
});
