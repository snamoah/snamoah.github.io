$(function() {
  SIZE = 4;
  TILE_WIDTH = 100;
  count = 0;
  WIN_MESSAGE = ":) You won!!!";
  LOSE_MESSAGE = ":( You lost!!!";
  WIN_LOSE_MESSAGE_BODY = "<button style='my_button'>Play again?</button>";
  MOVES_LEFT = ( SIZE * SIZE ) - SIZE + 1;

  load_tiles = function () {
    $(".minesweeper_body").html("");
    row = "";
    tile = "<div class='tile'></div>";
    for( i = 0; i < SIZE; i++ ){
        row += tile;
    }

    for( i = 0; i < SIZE; i++ ) {
      $(".minesweeper_body").append("<div class='row center'>" + row + "</div>");
    }

    $(".row").width(TILE_WIDTH * SIZE);
  }

  reset = function() {
    $(".minesweeper_body").removeClass("animated zoomIn");
    $(".tile").removeClass("mines").removeClass("bomb").removeClass("not_bomb").removeAttr("id").removeClass("animated flipInX");
    count = 0;
    MOVES_LEFT = (SIZE * SIZE) - SIZE + 1;
  }

  grand_index = function(size) {
    c = [];
    while(c.length < size) {
      rand = Math.floor(Math.random() * (SIZE * SIZE));
      if($.inArray(rand, c) == -1) { c.push(rand); }
    }

    return c;
  }
  set_id = function() {
    tile_array = $(".tile");
    id = grand_index(SIZE-1); 
    $.each(tile_array, function( index, value ) {
     if($.inArray(index, id) != -1) {
       $(this).addClass("mines");
     }
    });
  }

  check_win = function(e) {
    if( e.hasClass("bomb") ) {
      display_message(LOSE_MESSAGE);
    } else if( count == ( SIZE * SIZE ) - 1 ) {
      display_message(WIN_MESSAGE);
    } else {
      display_message(LOSE_MESSAGE);
    }
  }

  display_message = function(message) {
    dialog_display("show", message);
  }

  setMoves = function() {
    $(".moves .body").text(MOVES_LEFT -= 1);
  }

  dialog_display = function(action, message){
    $(".dialog_background h1").text(message);
    $(".dialog_background").toggleClass(action);
    $(".dialog_background .container").toggleClass("animated slideInUp");
    $(".dialog_background .close_button").click(function() {
      dialog_display("show");
    });
  }

  $("button").click(function() {
    dialog_display("show");
    initialize();
  });

  setupHandlers = function() { 
    $(".tile").click(function() {
      if(!$(this).hasClass("animated")) {
        count += 1;
        $(this).addClass("animated flipInX");
        if($(this).hasClass("mines")) {
          $(".mines").addClass("bomb");
          check_win($(this));
        } else {
          $(this).addClass("not_bomb");
          setMoves();
          if(count == (SIZE * SIZE) - 1) {
            check_win($(this));
          }
        } 
      }
    });
  }

  initialize = function() {
    //$("h1").addClass("animated infinite zoomIn");
    //$(".container").addClass("animated shake");
    reset();
    load_tiles();
    set_id();
    setupHandlers();
    $(".moves .body").text(MOVES_LEFT);
    $(".minesweeper_body").addClass("animated zoomIn");
  }

  initialize();




  // menu scripts
  $(".menu_container ul").hide();

  $(".menu_container .menu_button").click(function(e) {
    e.preventDefault();
    $(".menu_container ul").slideToggle();
  });

  // handlers for menu items
  $(".menu_dropdown .new_game").click(function(e) {
    e.preventDefault();
    initialize();
  });

  $(".menu_dropdown .amateur").click(function(e) {
    e.preventDefault();
    SIZE = 2;
    initialize();
  });

  $(".menu_dropdown .intermediate").click(function(e) {
    e.preventDefault();
    SIZE = 4;
    initialize();
  });

  $(".menu_dropdown .professional").click(function(e) {
    e.preventDefault();
    SIZE = 5;
    initialize();
  });
});

Dialog = {
  element: $(".dialog_background"),
  init: function(title, body) {
    $(this).title().text(title);
    $(this).body().html(body);
  },
  title: function() {
    return element.find("h1");
  },
  body: function() {
    return element.find(".body");
  },
  setTitle: function(title) {
    element.title().text(title);
  },
  setBody: function(content) {
    body().html(content);
  },
  hide: function() {
    element.hide();
  },
  show: function() {
    element.show();
  },
}
