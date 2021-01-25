$(document).ready(function () {
    let len = $('.titleList li').length
    let titleList = document.getElementsByClassName('titleList')
    let titleLi = titleList[0].children
    let liHeight = titleLi[0].clientHeight
    let backBox = $('.backBox');
    let flag = len > 0 ? Math.ceil((len - 1) / 2) : 0;
    let conetnt = $('.contentBox .contentList li');
    $('#titleList').css({
        height: ((len) - 1) * liHeight
    });
    backBox.css({
        'top': (len - 1) * liHeight,
        'height': liHeight,
    })
    $('.titleList li').css({
        'position': 'absolute',
    })
    $('.titleList li').eq(flag).addClass('current');
    $('.contentBox .contentList li').hide().eq(flag).show();
    $('.titleList li').each(function (index, domElm) {
        if (index != flag) {
            $(domElm).stop().animate({
                'top': ((len - 1) + (index - flag)) * liHeight,
                'left': Math.abs(index - flag) 
            })
        } else {
            $(domElm).stop().animate({
                'top': (len - 1) * liHeight,
                'left': '0'
            })
        }
    })
    $('.titleList li').on('click', function () {
        let clkidx = $(this).index();
        if (clkidx != flag) {
            $('.titleList li').removeClass('current');
            $(this).addClass('current');
            $('.titleList li').each(function (index, domElm) {
                $(domElm).stop().animate({
                    'top': ((len - 1) + (index - clkidx)) * liHeight,
                    'left': Math.abs(index - clkidx) 
                })
            })
            conetnt.hide().eq(clkidx).fadeIn();
            flag = clkidx
        } else {
            $(this).stop().animate({
                'top': (len - 1) * liHeight,
                'left': '0'
            })
        }
    })
})