var board = [];
board[0] = { name: '#main_notice_contents', nanoname: '#main_notice_nano_content', board: 'notice', start: 15, num: 15, loading: false, end: false }
board[1] = { name: '#main_freeboard_contents', nanoname: '#main_freeboard_nano_content', board: 'free', start: 15, num: 15, loading: false, end: false }
board[2] = { name: '#main_purchase_contents', nanoname: '#main_purchase_nano_content', board: 'purchase', start: 10, num: 5, loading: false, end: false }
board[3] = { name: '#main_promote_contents', nanoname: '#main_promote_nano_content', board: 'promote', start: 10, num: 5, loading: false, end: false }
board[4] = { name: '#main_user_activities_contents', nanoname: '#main_user_activities_nano_content', board: 'project', start: 5, num: 5, loading: false, end: false }

function getarticleinfo(i, start, num, end, method){
  if (end) {
    return;
  }
  $.ajax({
    // url  : 'articles_info?board=' + board + '&start=' + start + '&num=' + num,
    url  : 'articles_info',
    type  : 'GET',
    cache  : false,
    data  : {
      board:board[i].board,
      start:start,
      num:num,
      method:method
    },
    contentType  : 'charset=utf-8',
    dataType  : 'json',
    success  : function(data){
      board[i].loading=false;
      board[i].start += board[i].num;
      $('.loading_article').remove();

      if (data.article.length === 0) {
        board[i].end = true;
        return;
      }

      if (board[i].board == 'notice'){
        for ( j = 0 ; j < data.article.length ; j++){
          var div = '<div class="article_row"> <span class="date">' + data.article[j]["date_m"] + '/' + data.article[j]["date_d"] + '</span> <div class="article_row_content"> <span class="article_title"> <a href=' + data.article[j]["url"] + '>' + data.article[j]["title"] + '</a> </span>' 
          if (data.article[j]["various"] > 0)
            div +='<span class="comment">[' + data.article[j]["various"] + ']</span>';
          div += ' <span id="is_new_' + data.article[j]["no"] + '"></span> </div> </div>'
          $(board[i].nanoname).append(div)
        }
        j = 0
        $('.nano').nanoScroller();
        $('.nano').nanoScroller();
      }
      else
      if (board[i].board == 'free'){
        for ( j = 0 ; j < data.article.length ; j++){
          var div = '<div class="article_row"> <span class="date">' + data.article[j]["date_m"] + '/' + data.article[j]["date_d"] + '</span> <div class="article_row_content"> <span class="article_title"> <a href=' + data.article[j]["url"] + '>' + data.article[j]["title"] + '</a> </span>' 
          if (data.article[j]["various"] > 0)
            div +='<span class="comment">[' + data.article[j]["various"] + ']</span>';
          div += ' <span id="is_new_' + data.article[j]["no"] + '"></span> </div> </div>'
          $(board[i].nanoname).append(div)
        }
        j = 0
        $('.nano').nanoScroller();
        $('.nano').nanoScroller();
      }
      else
      if (board[i].board == 'purchase'){
        for ( j = 0 ; j < data.article.length ; j++){
          var div = '<div class="purchase_row article"> <span class="date">' + data.article[j]["date_m"] + '/' + data.article[j]["date_d"] + '</span> <span class="purchase_row_title"><a href=' + data.article[j]["url"] + '>' + data.article[j]["title"] + '</a></span> <span> - 동의수 : ' + data.article[j]["various"] + ' / '+ required +'</span> </div>'
          $(board[i].nanoname).append(div)
        }
        j = 0
        $('.nano').nanoScroller();
        $('.nano').nanoScroller();
      }
      else
      if (board[i].board == 'promote'){
        for ( j = 0 ; j < data.article.length ; j++){
          var div = '<div class="promote_row article"> <span><a href=' + data.article[j]["url"] + '>' + data.article[j]["title"] + '</a></span> <span> - 동의수 : ' + data.article[j]["various"] + ' / '+ required +'</span> </div>'
          $(board[i].nanoname).append(div)
        }
        j = 0
        $('.nano').nanoScroller();
        $('.nano').nanoScroller();
      }
      else
      if (board[i].board == 'project'){
        for ( j = 0 ; j < data.article.length ; j++){
          var div = '<div class="project_article container article"> <h4>'+ data.article[j]["various2"] + '</h4> <span class="date">' + data.article[j]["date_m"] + '/' + data.article[j]["date_d"] + '</span> <div class="project_row_content"> <span class="project_title"><a href=' + data.article[j]["url"] + '>' + data.article[j]["title"] + '</a></span>' 
          if (data.article[j]["various"] > 0)
            div +='<span class="comment">[' + data.article[j]["various"] + ']</span>';
          div += ' <span id="is_new_' + data.article[j]["no"] + '"></span> </div> </div>'
          $(board[i].nanoname).append(div)
        }
        j = 0
        $('.nano').nanoScroller();
        $('.nano').nanoScroller();
      }
      else
      {}
    },
    error  : function(result){
      board[i].loading=false;
      $('.loading_article').remove();
    }
  })
}

function makeFunction(i){
  return function(){
    if ( board[i].loading === false && !board[i].end ){
      $(board[i].nanoname).append('<div class="loading_article">Loading...</div>');
      board[i].loading = true;
      $('.nano').nanoScroller();
      getarticleinfo(i, board[i].start, board[i].num, board[i].end, 'GET');
    }
  }
}

for (i = 0 ; i < 5 ; i++){
  $(board[i].name).bind("scrollend", makeFunction(i))
}

