var txt = '';
var content = '';
$('.over').mouseup(function () {

    if (document.selection) {
        txt = document.selection.createRange().text;
    } else {
        txt = document.getSelection();
    }
    content = txt.toString();
});


  

$("#bao").click(function() {
    var arr = [];//文字数组
    var list = $(".top p");
    for (var i = 0; i < list.length; i++) {
        arr[i] = list[i].innerHTML;
    }
    // var arr=JSON.stringify(arr)
    console.log(arr)
    $.ajax({
        type: "post",
        url: basePath +"/word/saveUserWord",
        data: {
            arr:arr,
        },
        dataType: "json",
        success: function (res) {
            if(res.status==1) {
                alert("保存成功")
                 location.reload();
            }
        }
    });
    
})

$('#but1').click(function () {
    let equal = $('.border').text();
    let equals = $('#but1').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>'+ content  + "/" + equals +  '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but2').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but2').text();
    if (content === equal) {
        return false;
    }       
   
    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
}) 
$('#but3').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but3').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but4').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but4').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but5').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but5').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but6').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but6').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but7').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but7').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but8').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but8').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but9').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but9').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but10').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but10').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})
$('#but11').click(function () {
    let equal = $('.border span').text();
    let equals = $('#but11').text();
    if (content === equal) {
        return false;
    }

    // $('.border').append('<p>' + content + "/" + equals + '</p>');
    let color = $(this).css('background-color');
    $('.border').append('<p style="color: ' + color + ';">' + content + "/" + equals + '</p>');
    content = '';
})


function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
var id = getQueryString(name = "id")
console.log(id)

var url = basePath + '/file/text';
var params = {
    "id": id
};
$.post(url, params, function (res) {
    $("#txt").text(res)

}, 'text');