function getProjectinfo(show) {
  var targeturl = "/project_info/" + show.no;
  jQuery.ajax({
    type    :"GET",
    url     :targeturl,
    dataType        : "JSON",
    success : function(data) {
      if (data.end == 'max'){
        show.no -= 1;
        show.end = true;
      }
      else if (data.end == 'fine'){
        $('#project_title').html(data.title);
        $('#project_genre').html(data.genre);
        $('#project_intro').html(data.intro);
        $('#thumbnail_content').html('<img src="' + data.thumbnail + '" alt="thumbnail" class="thumbnail_image"/>');
      }
      else{
        ;
      }
    },
    error : function(xhr, status, error) {
      console.log("에러발생");
      console.log(xhr);
    }
  });
}

var show = { no : 0, end : false };
getProjectinfo(show);
$('#button_left').click(function() {
  show.end = false;
  if (show.no > 0){
    show.no -= 1;
    getProjectinfo(show);
  }
});
$('#button_right').click(function() {
  if (!show.end){
    show.no+=1;
    getProjectinfo(show);
  }
});
