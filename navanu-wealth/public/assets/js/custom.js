(function ($) {
  "use strict";
  // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });

 $(document).on("click", ".search-btn", function () {
    $(".search-box").toggleClass("active");
    $(".search-input").focus();
});

})(jQuery);
