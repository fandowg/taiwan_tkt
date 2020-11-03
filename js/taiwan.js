//選單判斷滾動位置固定

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var offsetTop = $(".tkt-content").offset().top-100;
  if(scroll>offsetTop){
    $('.top-menu').addClass("fix");
    $('.tkt-content').addClass("for-fix");
  }else{
    $('.top-menu').removeClass("fix");
    $('.tkt-content').removeClass("for-fix");
  }
});

//打開購物車

var popUp = {
  open: function() {
      $('.popup-overlay ').addClass('show');
      $('body').addClass('open');
      
  },
  close: function() {
    $('.popup-overlay ').removeClass('show');
      $('body').removeClass('open');
  }
}

$(".popup-btn").click(function(e) {
  e.preventDefault();
  popUp.open();
});

$(".popup-close-btn").click(function() {

  popUp.close();
});
$('.popup-overlay ').click(function(e) {
if( !$('.fill-out-form ').is(e.target)){
  popUp.close();
}
})
//打開登入
$(".toggle-btn").click(function() {
  $(".sign-in").slideToggle(200)
})


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