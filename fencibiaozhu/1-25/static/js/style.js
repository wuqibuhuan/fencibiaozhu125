$(function () {
    function tabs(tabTit, on, tabCon) {
        $(tabCon).each(function () {
            $(this).children().eq(0).show();
        });
        $(tabTit).each(function () {
            $(this).children().eq(0).addClass(on);
        });
        $(tabTit).children().click(function () {
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    }
    tabs(".investment_title", "on", ".investment_con");
})
$('.on').click(function () {
    $('.e').css("background", "#ffcc00")
    $('.e').css("color", "#fff")
    $('.err').css("background", "none")
    $('.we').css("background", "none")
})
$('.two').click(function () {
    $('.we').css("background", "#ffcc00")
    $('.we').css("color", "#fff")
    $('.e').css("background", "none")
    $('.err').css("background", "none")

})
$('.tree').click(function () {
    $('.err').css("background", "#ffcc00")
    $('.err').css("color", "#fff")
    $('.e').css("background", "none")
    $('.we').css("background", "none")
})
$('.frou').click(function () {
    $('.err').css("background", "#ffcc00")
    $('.err').css("color", "#fff")
    $('.e').css("background", "none")
    $('.we').css("background", "none")
})