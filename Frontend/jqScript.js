
$(document).ready(function () {


    $("#line").slideToggle();
    $("#line").click(function () {
        window.open("https://line.me/ti/p/XXX", "_blank");
    });

    $("#facebook").slideToggle();
    $("#facebook").click(function () {
        window.open("https://facebook.com", "_blank");
    });

    $("#phone").slideToggle();
    $("#phone").click(function () {
        window.open("tel:0999999999", "_blank");
    });

    $("#chat").click(function () {
        $("#chat").find("img").toggleClass("d-none");

        $("#line").slideToggle();
        $("#facebook").slideToggle();
        $("#phone").slideToggle();
    });

    $("#button").click(function () {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 1000);
    });

    //hide button when form is shown
    $(window).scroll(function () {
        var threshold = $("#form").height() - 100; // number of pixels before bottom of page that you want to start fading
        var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
        if (op <= 1) {
            $("#button").hide('slide', { direction: 'down' }, 500)

        } else {
            $("#button").show('slide', { direction: 'down' }, 500)
        }

    });
});
