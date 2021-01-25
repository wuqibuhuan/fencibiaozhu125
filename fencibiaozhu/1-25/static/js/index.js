//   文档
// $('.butone').click(function () {
//     $('.list-1').animate({
//         right: "21%",
//     }, 300)
//     $(".list-1").css("display", "block")
//     $(".list").css("display", "none")
//     $(".list-2").css("display", "none")
//     $(".list-3").css("display", "none")
// })
//  范文
// $('.buttwo').click(function () {
//     $('.list-2').animate({
//         right: "21%",
//     }, 300)
//     $(".list-2").css("display", "block")
//     $(".list").css("display", "none")
//     $(".list-1").css("display", "none")
//     $(".list-3").css("display", "none")
// })
//  图文
$('.buttree').click(function () {
    var docPath = $("#path").val();
    if (!$.isEmptyObject(imageContent) && !$.isEmptyObject(imageContent2) && imageContent == imageContent2) {
        // layer.msg("pdf比对过了，请到列表查看！");
        $('.list-3').animate({
            top: 0
        }, 1000)
        $(".list-3").css("display", "block")
        $(".list").css("display", "none")
        $(".list-1").css("display", "none")
        $(".list-2").css("display", "none")
        $('.shangchuan-1').css('display', 'block')
        $('.models-2').css('display', 'block')
        $('.dd').css('display', 'none')
    } else if (docPath == "") {
        layer.msg("请先上传文件！");
    } else {
        $('.list-3').animate({
            top: 0
        }, 1000)
        $(".list-3").css("display", "block")
        $(".list").css("display", "none")
        $(".list-1").css("display", "none")
        $(".list-2").css("display", "none")
        $('.models-2').css('display', 'none')
        $('.dd').css('display', 'block')
    }

})

// 返回按钮
$('.ding-1').click(function () {
    refresh();
    $(".list").css("display", "block")
    $(".yincang").css("display", "block")
    $(".list-1").css("display", "none")
    $(".list-2").css("display", "none")
    $(".list-3").css("display", "none")
    // getDocumentList();
})
//点击按钮调用的方法
function refresh() {
    window.location.reload();//刷新当前页面.

    //或者下方刷新方法
    //parent.location.reload()刷新父亲对象（用于框架）--需在iframe框架内使用
    //opener.location.reload()刷新父窗口对象（用于单开窗口)
    //top.location.reload()刷新最顶端对象（用于多开窗口）
}
// $('#tanchu').click(function () {
//     $('.models-6').css('display','block')
//     $('.kuang-1').css('display','none')
// })
$('.start-3').click(function () {
    $('.models-6').css('display', 'none')
    // $('.kuang-1').css('display','block')
})


$('#tuwenbidui').click(function () {
    $('.kuang-1').css('display', 'block')
    $('.models-1').css('display', 'none')

})


function start11() {
    // var docPath = $("#path").val();
    // if (docPath == "") {
    //     layer.msg("请先上传文件！");
    // } else {
    //     $('.list-1').animate({
    //         top: 0
    //     }, 1000)
    //     $(".list-1").css("display", "block")
    //     $(".yincang").css("display", "none")
    //     $(".list-2").css("display", "none")
    //     $(".list-3").css("display", "none")
    // }
    if (!$('table').find('tr:visible').length) {
        layer.msg("请先上传文件！");
    }else {
        
    }

}

function start22() {
    $('.list-2').animate({
        top: 0
    }, 1000)
    $(".list-2").css("display", "block")
    $(".list").css("display", "none")
    $(".list-1").css("display", "none")
    $(".list-3").css("display", "none")
}

function start33() {
    $('.list-3').animate({
        top: 0
    }, 1000)
    $(".list-3").css("display", "block")
    $(".list").css("display", "none")
    $(".list-1").css("display", "none")
    $(".list-2").css("display", "none")
    $('.models-2').css('display', 'none')
    $('.dd').css('display', 'block')
}
$('#qu').click(function () {
    $('.kuang-1').css('display', 'none')
    $('.models-6').css('display', 'none')
})



var maxHeight = 400;
$(function () {
    $(".dropdown > li").hover(function () {
        var $container = $(this),
            $list = $container.find("ul"),
            $anchor = $container.find("a"),
            height = $list.height() * 1.1,
            multiplier = height / maxHeight;
        $container.data("origHeight", $container.height());
        $anchor.addClass("hover");
        $list.show().css({
            paddingTop: $container.data("origHeight")
        });
        if (multiplier > 1) {
            $container.css({
                height: maxHeight,
                overflow: "hidden"
            }).mousemove(function (e) {
                var offset = $container.offset();
                var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data(
                    "origHeight") * multiplier);
                if (relativeY > $container.data("origHeight")) {
                    $list.css("top", -relativeY + $container.data("origHeight"));
                };
            });
        }
    }, function () {
        var $el = $(this);
        $el.height($(this).data("origHeight")).find("ul").css({
            top: 0
        }).hide().end().find("a").removeClass("hover");
    });
});