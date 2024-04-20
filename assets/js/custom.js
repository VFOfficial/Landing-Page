// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
}); 

// Smooth Page Scrolling

$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

// F.A.Q accordion
$("#accordionExample")
    .on("show.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").addClass("accordion-animation");
})
    .on("hide.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").removeClass("accordion-animation");
});	
$("#accordionExample2")
    .on("show.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").addClass("accordion-animation");
})
    .on("hide.bs.collapse", function (e) {
    $(e.target).parent(".accordion-item").removeClass("accordion-animation");
});	


// Challenge Table
$('#step-1 .btn').on('click', function(event) {
    $(".btn").removeClass("active-1");
    $(this).addClass("active-1");
    var val = $(this).find('input').val();
    $('#step-1-output').html(val);
});
$('#step-2 .btn').on('click', function(event) {
    $(".btn").removeClass("active-2");
    $(this).addClass("active-2");
    var val = $(this).find('input').val();
    $('#step-2-output').html(val);
});
$('#instant .btn').on('click', function(event) {
    $(".btn").removeClass("active-3");
    $(this).addClass("active-3");
    var val = $(this).find('input').val();
    $('#instant-output').html(val);
});

// Active Anchor Link
document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

// Logo slide
var copy = document.querySelector(".payment-slide").cloneNode(true);
document.querySelector(".payment-slider").appendChild(copy);

