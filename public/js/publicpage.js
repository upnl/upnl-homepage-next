$(".autolink").each(function (){
  var str = $(this).html()
  var linkedText = Autolinker.link(str);
  $(this).html(linkedText);
})
var leftmove;
$("#left-arrow").mouseenter(function (){
  var thumbnails = $("#thumbnails-wrapper");
  leftmove = setInterval(function (){
    var pos = thumbnails.scrollLeft()
    thumbnails.scrollLeft(pos - 10)
  }, 50)
}).mouseleave(function (){
  clearInterval(leftmove);
})
var rightmove;
$("#right-arrow").mouseenter(function (){
  var thumbnails = $("#thumbnails-wrapper");
  rightmove = setInterval(function (){
    var pos = thumbnails.scrollLeft()
    thumbnails.scrollLeft(pos + 10)
  }, 50)
}).mouseleave(function (){
  clearInterval(rightmove);
})
