$(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".mobile-menu").toggle();

    });

});
if (window.screen.width > 678) {
    document.querySelector('.mobile-menu').style.display = 'none';
}