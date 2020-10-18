$(document).ready(function() {

    $(".button-1").click(function() {
        $(".objasnjenje-1").slideToggle(200);
        $(".button-1").toggleClass('flip');
    });

    $(".button-2").click(function() {
        $(".objasnjenje-2").slideToggle(200);
        $(".button-2").toggleClass('flip');
    });

    $(".button-3").click(function() {
        $(".objasnjenje-3").slideToggle(200);
        $(".button-3").toggleClass('flip');
    });

    $(".button-4").click(function() {
        $(".objasnjenje-4").slideToggle(200);
        $(".button-4").toggleClass('flip');
    });

    $(".button-5").click(function() {
        $(".objasnjenje-5").slideToggle(200);
        $(".button-5").toggleClass('flip');
    });

    $(".button-6").click(function() {
        $(".objasnjenje-6").slideToggle(200);
        $(".button-6").toggleClass('flip');
    });

    $(".toggle").click(function() {
        if($(".toggle").attr("src")=="css/icons/hamburger.svg") {
            $(".toggle").attr("src","css/icons/close.svg");
            $(".toggle-nav").css("display", "block");
        } else {
            $(".toggle").attr("src","css/icons/hamburger.svg");
            $(".toggle-nav").css("display", "none");
        }
    });


}); ///// document ready closing
