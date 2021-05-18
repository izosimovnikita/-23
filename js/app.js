$(function() {

    let header = $("#header"),
        scrollTop = $(window).scrollTop();


    /* Fixed Header */
    $(window).on("scroll load resize", function() {
        scrollTop = $(this).scrollTop();

        checkIntro();
    });

    $(window).resize(function(){
        innerWidth = $(this).innerWidth();
    });

    function checkIntro() {
        if (scrollTop >= $("#intro").innerHeight()) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockID = $this.data("scroll"),
            blockOffset = $(blockID).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 50
        }, 500);
        
        $("#nav_toggle").removeClass("active");
        $("#header").removeClass("active");
    })


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#header").toggleClass("active");
    })


    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        if ($(window).width() <= 770) {
            let $this = $(this),
            blockID = $this.data("collapse");

            $(blockID).slideToggle();
            $this.toggleClass("active");
        }
    })

    $(window).resize(function() {
        width = $(this).width();

        if (width > 770) {
            for (let i = 0; i < 4; i++) {
                $('#price_' + i).removeAttr('style');
            }
        }
    });
});
