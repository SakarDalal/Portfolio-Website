$(document).ready(function () {
    // Animate elements on scroll
    $(window).on('scroll', function () {
        $('.fade-in').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elementPos < topOfWindow + $(window).height() - 100) {
                $(this).addClass('animate__animated animate__fadeIn');
            }
        });
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70 // Adjust for navbar height
            }, 1000);
        }
    });
});


