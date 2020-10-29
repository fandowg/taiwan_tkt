  //切換menu
  for (var i = 0; i < $('.tab-menu ul li ').length; i++) {
    (function(i) {
      $('.tab-menu ul li ').eq(i).find('a').click(function(e) {
        e.preventDefault();
        console.log(this);
        $('.tab-menu ul li ').removeClass('sel');
        $(this).parent().addClass('sel');
        $('.tab-item').hide();
        $('.tab-item').eq(i).fadeIn(200);
      })
    })(i)
  }

  //header手機選單
  $(".toggler").click(function() {
    console.log(123);
    $(".nav-bar__list").toggleClass("open");
    $("body").toggleClass("open");
  });

  $(".close").click(function() {
    $(".nav-bar__list").removeClass("open");
    $("body").removeClass("open");
  });
  $(".dropdown-btn").click(function(e) {
    e.preventDefault();
  })

  //切換分類
  for (var i = 0; i < $('.dropdown-btn-mobile ').length; i++) {
    (function(i) {
      $('.dropdown-btn-mobile  ').eq(i).click(function(e) {
        e.preventDefault();

        $('.dropdown-mobile').not($('.dropdown-mobile').eq(i)).removeClass('show');
        $('.dropdown-mobile').eq(i).toggleClass('show');
      })
    })(i)
  }