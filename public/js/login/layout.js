function getQueryParams(qs) {
  qs = qs.split('+').join(' ');

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}
var get_parameter = getQueryParams(document.location.search);

window.onload = function () {  
  $("#nav_button_left").click(function (){
    $("#line_various").scrollLeft($("#line_various").scrollLeft() - 200);
  });
  $("#nav_button_right").click(function (){
    $("#line_various").scrollLeft($("#line_various").scrollLeft() + 200);
  });

  $('#category_various').mouseenter(function (){
    $('#line_various').show();
    if ($("#line_various").outerWidth() >= 880){
      $("#line_various").css('width', '880px');
      $("#nav_button_left").show();
      $("#nav_button_right").show();
    }
  });
  $('#category_study').mouseenter(function (){
    $('#line_various').hide();
    $("#nav_button_left").hide();
    $("#nav_button_right").hide();
  });
  $('#category_project').mouseenter(function (){
    $('#line_various').hide();
    $("#nav_button_left").hide();
    $("#nav_button_right").hide();
  });
}

function search_tag(){
  var content = $('#tag_search_content').val();
  encoded_content = encodeURIComponent(content)
  if (content != ""){
    url = search_tag_url + encoded_content;
    location.href=url;
  }
}

$('#tag_search_button').click(search_tag);
if ( !($('#sidebar').length > 0) ){
  $('#main_contents').width('940px');
  $('#main_contents').css( { marginLeft : "15px" });
}
$(".nano").nanoScroller();

var panorama = {name: '#panorama_nano', nanoname: '#panorama_nano_content', start: 15, num: 5, loading: false }
function getpanoramainfo(start, num, method){
  $.ajax({
    url  : '/panorama_info',
    type  : 'GET',
    cache  : false,
    data  : {
      start:start,
      num:num,
      method:method
    },
    contentType  : 'charset=utf-8',
    dataType  : 'json',
    success  : function(data){
      panorama.loading=false;
      panorama.start += num;
      $('.loading_article').remove();
      for (var j = 0 ; j < num ; j++){
        if (data.panorama[j]['result'] == 'delete')
          div = '<div class="panorama_row article"><span>삭제된 게시글입니다.</span></div>'
        else if (data.panorama[j]['result'] == 'new-article')
          div = '<div class="panorama_row article"> <img src="'+ data.panorama[j]['gravatar_url'] +'" height="32px"> <div class="panorama-row-content"> <a href="'+ data.panorama[j]['article_url'] +'">'+ data.panorama[j]['actor'] + ' 님의 글 ['+ data.panorama[j]['title'] +']이(가) 등록되었습니다.</a> / <a href="'+ data.panorama[j]['bbs_url'] +'">'+ data.panorama[j]['bbs_name'] +'</a> <span class="datatime" title="'+ data.panorama[j]['date'] +'">('+ data.panorama[j]['pretty_date'] +')</div>'
        else if (data.panorama[j]['result'] == 'new-comment')
          div = '<div class="panorama_row article"> <img src="'+ data.panorama[j]['gravatar_url'] +'" height="32px"> <div class="panorama-row-content"> <a href="'+ data.panorama[j]['article_url'] +'">'+ data.panorama[j]['actor'] + ' 님이 글 ['+ data.panorama[j]['title'] +']에 댓글을 다셨습니다.</a> / <a href="'+ data.panorama[j]['bbs_url'] +'">'+ data.panorama[j]['bbs_name'] +'</a> <span class="datatime" title="'+ data.panorama[j]['date'] +'">('+ data.panorama[j]['pretty_date'] +')</div>'
        $(panorama.nanoname).append(div)
      }
      $('.nano').nanoScroller();
    },
    error  : function(result){
      panorama.loading=false;
      $('.loading_article').remove();
    }
  })
}

function init_panorama(){
  var panorama_row_height = $('.panorama_row').outerHeight(true);
  var panorama_content_height = $('#panorama_nano_content').innerHeight();
  var num = Math.floor(panorama_content_height / panorama_row_height);
  // 스크롤이 생기기에 충분한 처음 파노라마 개수
  if ((num -= panorama.start) > 0)
    getpanoramainfo(panorama.start, num + 1, 'GET');
}
if ($(panorama.name).length !== 0)
  init_panorama();
$(panorama.name).bind("scrollend", function(){
  if ( panorama.loading === false ){
    $(panorama.nanoname).append('<div class="loading_article">Loading...</div>');
    panorama.loading = true;
    $('.nano').nanoScroller();
    getpanoramainfo(panorama.start, panorama.num, 'GET');
  }
});

$(function() {
  $('form.auto-save').sisyphus();
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-56444500-1', 'auto');
ga('send', 'pageview');

var is_open = false;
$("#panorama-wake-button").click(function(){
  var panoramaWidth = -$("#panorama").width();
  if (is_open)
    $("#panorama").animate({ right: panoramaWidth + 'px' }, 200);
  else
    $("#panorama").animate({ right: 0 }, 200);
  is_open = !is_open;
});

$(window).resize(function(){
  if ($(window).width() >= 1450){
    $("#panorama").css({ right: '' });
    is_open = false
  }
}).resize();

$('#panorama_nano_content').bind('mousewheel DOMMouseScroll', function(e) {
  var scrollTo = null;

  if (e.type == 'mousewheel') {
    scrollTo = (e.originalEvent.wheelDelta * -1);
  }
  else if (e.type == 'DOMMouseScroll') {
    scrollTo = 40 * e.originalEvent.detail;
  }

  if (scrollTo) {
    e.preventDefault();
    $(this).scrollTop(scrollTo + $(this).scrollTop());
  }
});

