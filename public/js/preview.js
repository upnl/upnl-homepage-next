$(function(){
  var convert_markdown_to_html = function(content){
    return $.ajax({
      url: "/markdown_to_html",
      type: "post",
      data:{"content": content},
      async:false
    }).responseText
  };

  var setPreview = function(){
    var raw_content = $("textarea.content").val(),
        render_type = $("[name=render_type]:checked").val(),
        $preview = $("#preview");
        content = render_type === 'markdown' ? convert_markdown_to_html(raw_content)
                : render_type === 'html' ? $("<div>").append(raw_content).html()
                : $("<div>").append(raw_content.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2'));

    $preview.html(content);
    render_type === 'markdown' && $preview.addClass('markdown-body') || $preview.removeClass('markdown-body');
  };

  $(".viewPreview").click(function(){
    $("#previewWrapper").show();
    setPreview();

    // http://stackoverflow.com/a/4801719/1813994
    $('html, body').animate({
      scrollTop: $("#preview").offset().top + 'px'
    }, 'fast');
    return false;
  });
});
