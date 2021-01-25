// 进度条
(function ($) {
    // Simple wrapper around jQuery animate to simplify animating progress from your app
    // Inputs: Progress as a percent, Callback
    // TODO: Add options and jQuery UI support.
    $.fn.animateProgress = function (progress, callback) {
        return this.each(function () {
            $(this).animate({
                width: progress + '%'
            }, {
                duration: 1000,

                // swing or linear
                easing: 'swing',

                // this gets called every step of the animation, and updates the label
                step: function (progress) {
                    var labelEl = $('.ui-label', this),
                        valueEl = $('.value', labelEl);

                    if (Math.ceil(progress) < 20 && $('.ui-label', this).is(":visible")) {
                        labelEl.hide();
                    } else {
                        if (labelEl.is(":hidden")) {
                            labelEl.fadeIn();
                        };
                    }

                    if (Math.ceil(progress) == 100) {
                        // labelEl.text('完成');
                        setTimeout(function () {
                            labelEl.fadeOut();
                        }, 1000);
                    } else {
                        valueEl.text(Math.ceil(progress) + '%');
                    }
                },
                complete: function (scope, i, elem) {
                    if (callback) {
                        callback.call(this, i, elem);
                    };
                }
            });
        });
    };
})(jQuery);


// 核查启动按钮
// $("#qidong-1").click(function () {
//    var sendmes= $("input[name='sendmes']:checked").val();
//     var docPath=$("#path").val();
//     if( hFlag>0){
//         // layer.msg("此文档正在核查，请稍后到列表查看！");
//         // return false;
//         start11();
//     } else if(docPath==""){
//         layer.msg("请先上传文件！");
//     }else{
//         hFlag=hFlag+1;
//         start11();
//         $.ajax({
//             type: "post",
//             url: 'http://172.16.1.119:8989/file/check',
//             async: false,
//             data: {
//                 "path": res.path,
//                 // "docPath": docPath
//             },
//             dataType: "json",
//             success: function (data) {
//                 var docId = data.docId;
//                 $('#progress_bar-1 .ui-progress-1 .ui-label').hide();
//                 $('#progress_bar-1 .ui-progress-1').css('width', '7%');
//                 var test1 = setInterval(function () {
//                     $.ajax({
//                         type: "post",
//                         url: "/commonDoc/get-status",
//                         data: {
//                             'id': docId
//                         },
//                         dataType: "json",
//                         success: function (data) {
//                             console.log(data)
//                             $('#progress_bar-1 .ui-progress-1').animateProgress(92, function () {
//                                 if (data.data.status == 'success') {
//                                     $(this).animateProgress(100, function () {
//                                         $('#main_content-1').slideDown();
//                                         $('#fork_me').fadeIn();
//                                         $('.wei').show();
//                                         $("#hechaid").val(data.data.id);
//                                     });
//                                     window.clearTimeout(test1);
//                                 }
//                             });
//                         }
//                     });
//                 }, 2000);
//             }
//         });
//     }
// })

// $("#qidong-2").click(function () {
//     var docPath=$("#path").val();
//     if(fanFlag>0){
//         // layer.msg("此文档正在对比,请稍后到列表查看！");
//         // return false;
//         start22();
//     } else if(docPath==""){
//         layer.msg("请先上传文件！");
//     }else{
//         fanFlag= fanFlag+1;
//         start22();
//         $.ajax({
//             type: "post",
//             url: basePath + '/contract/add-contract2',
//             async: false,
//             data: {
//                 "docPath":docPath
//             },
//             dataType: "json",
//             success: function (data) {
//                 const userId = data.data.id;
//                 $('#progress_bar .ui-progress-1 .ui-label').hide();
//                 $('#progress_bar .ui-progress-1').css('width', '1%');
//                 const test1 = setInterval(function () {
//                     $.ajax({
//                         type: "post",
//                         url: basePath + "/contract/get-status",
//                         data: {
//                             'id': userId
//                         },
//                         dataType: "json",
//                         success: function (data) {
//                             console.log(data)
//                             // Simulate some progress
//                             $('#progress_bar .ui-progress-1').animateProgress(92, function () {
//                                 if (data.data.status === 'success') {
//                                     window.clearTimeout(test1);
//                                     $(this).animateProgress(100, function () {
//                                         $('#main_content').slideDown();
//                                         $('#fork_me').fadeIn();
//                                         $('.startss').show();
//                                         $("#fanwenid").val(data.data.id);
//                                         // $('#view').attr('href', basePath + '/contract/start?id=' + data.data.id);
//                                     });
//                                 }
//                             });
//                         }
//                     });
//                 }, 2000);
//             }
//         });
//     }
// })

// $('#qidong3').click(function (){
//     // if($.isEmptyObject(imageDoc)||$.isEmptyObject(imageContent)){
//     //     layer.msg('请同时上传两个文件');
//     if($.isEmptyObject(imageContent)){
//         layer.msg("请先上传pdf文件！");
//     } else if(!$.isEmptyObject(imageContent)&&!$.isEmptyObject(imageContent2)&&imageContent==imageContent2){
//       layer.msg("pdf比对过了，请到列表查看！");
//     }else{
//         imageContent2=imageContent;
//         $('.models-2').css('display', 'block')
//         $('.dd').css('display','none')
//         var docPath=$("#path").val();
//         $('#progress_bar-2 .ui-progress-1 .ui-label').hide();
//         $('#progress_bar-2 .ui-progress-1').css('width', '1%');
//         $('#progress_bar-2 .ui-progress-1').animateProgress(35, function (){
//             $.ajax({
//                 type: "post",
//                 url: '/image/addImageDoc2',
//                 async: false,
//                 data: {
//                     "docPath": docPath,
//                     "imageName": imageContent.fileName,
//                     "imagePath": imageContent.path
//                 },
//                 dataType: "json",
//                 success: function (data) {
//                     console.log(data);
//                     // table.reload('imageTables', {
//                     //     url: '/image/image-list',
//                     //     where: { //设定异步数据接口的额外参数，任意设
//                     //         limitName: '5',
//                     //         pageName: '1'}
//                     // });
//                     const imagePath = data.data.imagePath;
//                     const test2 = setInterval(function () {
//                         $.ajax({
//                             type: "post",
//                             url: "/image/get-status",
//                             data: {
//                                 'imagePath': imagePath
//                             },
//                             dataType: "json",
//                             success: function (data) {
//                                 console.log(data)
//                                 // $('#progress_bar .ui-progress').animateProgress(91, function () {
//                                 if(data.data.status=='success') {
//                                     window.clearTimeout(test2);
//                                     $("#progress_bar-2 .ui-progress-1").animateProgress(100, function () {
//                                         $('#main_content-2').slideDown();
//                                         $('#fork_me').fadeIn();
//                                         $('.start-8').show();
//                                         $('#imageId').val(data.data.id);
//                                         // $('#view1').attr('href', basePath + '/imagedoc/start?id=' + data.data.id);
//                                     },4000);
//                                 }
//                                 // });
//                             }
//                         });
//                     }, 3000);
//                 }
//             });
//         });
//     }



// });

// function view() {
//     const id = $("#hechaid").val();
//     window.location.href = basePath + '/eye/goto-result?id=' + id;
// //     window.open(basePath + '/eye/goto-result?id='+encodeURI(id));
//  }

function view2() {
    const id = $("#fanwenid").val();
    window.location.href = basePath + '/contract/start?id=' + id;
    // window.open(basePath + '/contract/start?id='+encodeURI(id));
}

function view3() {
    const id = $("#imageId").val();
    window.location.href = basePath + '/imagedoc/start?id=' + id;
    // window.open(basePath + '/imagedoc/start?id='+encodeURI(id));
}

$('#fanwen').click(function () {
    var idd=contract.message;
    if(idd=='1'){
        window.open(basePath + '/contract/start?id='+encodeURI(contract.data.id));
    } else if(flag1>0){
        const id = $("#fanwenid").val();
        if(id!==""){
            window.open(basePath + '/contract/start?id='+encodeURI(id));
        }
    }else{
        flag1=flag1+1;
        $('.models-1').css('display','block')
        $('.kuang').css('display','block');
        $('.kuang-1').css('display','none');
        var id = $("#docId").val();
        $.ajax({
            type: "post",
            url: basePath + '/contract/add-contract3',
            async: false,
            data: {
                "id":id
            },
            dataType: "json",
            success: function (data) {
                const userId = data.data.id;
                $('#progress_bar .ui-progress-1 .ui-label').hide();
                $('#progress_bar .ui-progress-1').css('width', '1%');
                const test1 = setInterval(function () {
                    $.ajax({
                        type: "post",
                        url: basePath + "/contract/get-status",
                        data: {
                            'id': userId
                        },
                        dataType: "json",
                        success: function (data) {
                            console.log(data)
                            // Simulate some progress
                            $('#progress_bar .ui-progress-1').animateProgress(92, function () {
                                if (data.data.status === 'success') {
                                    window.clearTimeout(test1);
                                    $(this).animateProgress(100, function () {
                                        // var syarts= document.getElementById("vas")
                                        $('#main_content').slideDown();
                                        $('#fork_me').fadeIn();
                                        $('.wei').show();
                                        $("#fanwenid").val(data.data.id);
                                        // $('#view').attr('href', basePath + '/contract/start?id=' + data.data.id);
                                    });
                                }
                            });
                        }
                    });
                }, 2000);
            }
        });
    }
})

$('#tanchu').click(function () {
    if($.isEmptyObject(imageContent)){
        layer.msg("请先上传pdf文件！");
    } else if(!$.isEmptyObject(imageContent)&&!$.isEmptyObject(imageContent2)&&imageContent==imageContent2){
        layer.msg("文件比对过了，请到列表查看！");
    }else {
        imageContent2=imageContent;
        $('.models-6').css('display', 'block');
        $('.kuang-1').css('display', 'none');
        var id = $("#docId").val();
        $('#progress_bar-2 .ui-progress-1').animateProgress(35, function () {
            $.ajax({
                type: "post",
                url: '/image/addImageDoc3',
                async: false,
                data: {
                    "id": id,
                    "imageName": imageContent.fileName,
                    "imagePath": imageContent.path
                },
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    const imagePath = data.data.imagePath;
                    const test2 = setInterval(function () {
                        $.ajax({
                            type: "post",
                            url: "/image/get-status",
                            data: {
                                'imagePath': imagePath
                            },
                            dataType: "json",
                            success: function (data) {
                                console.log(data)
                                $('#progress_bar-2 .ui-progress-1').animateProgress(92, function () {
                                if (data.data.status == 'success') {
                                    window.clearTimeout(test2);
                                    $("#progress_bar-2 .ui-progress-1").animateProgress(100, function () {
                                        $('#main_content-2').slideDown();
                                        $('#fork_me').fadeIn();
                                        $('.wei-2').show();
                                        $('#imageId').val(data.data.id);
                                        // $('#view1').attr('href', basePath + '/imagedoc/start?id=' + data.data.id);
                                    }, 4000);
                                }
                                });
                            }
                            
                        });
                    }, 3000);
                }
            });
        });
    }
})

$('.startts').click(function () {
    $('.models-1').css('display','none')
})


//选择模板进行对比

$('#kaishi').click(function() {
    var id= $('#sex option:selected').val();
    var docId=$('#contractId').val();
    if(id==""){
        layer.msg("没有可选择的模板！");
    }else{
        $('.models').animate({
            top:205
        },500)
        $('.models').css('display', 'block')
        $('.favorite').css('display', 'none')
        $.ajax({
            type: "post",
            url: basePath + '/contract/add-checkTemplate',
            async: false,
            data: {
                "id":id,
                "docId":docId
            },
            dataType: "json",
            success: function (data) {
                const userId = data.data.id;
                $('#progress_bar .ui-progress-1 .ui-label').hide();
                $('#progress_bar .ui-progress-1').css('width', '1%');
                const test1 = setInterval(function () {
                    $.ajax({
                        type: "post",
                        url: basePath + "/contract/get-status",
                        data: {
                            'id': userId
                        },
                        dataType: "json",
                        success: function (data) {
                            console.log(data)
                            // Simulate some progress
                            $('#progress_bar .ui-progress-1').animateProgress(92, function () {
                                if (data.data.status === 'success') {
                                    window.clearTimeout(test1);
                                    $(this).animateProgress(100, function () {
                                        $('#main_content').slideDown();
                                        $('#fork_me').fadeIn();
                                        $('.wei').show();
                                        $("#fanwenid").val(data.data.id);
                                        // $('#view').attr('href', basePath + '/contract/start?id=' + data.data.id);
                                    });
                                }
                            });
                        }
                    });
                }, 2000);
            }
        });

    }
});

//自定义模板进行对比

$('#qidong-11').click(function (){
    var id=$('#contractId').val();
    if($.isEmptyObject(selfTemplate)){
        layer.msg("请先上传文件！");
    }else{
        $('.models-1').animate({
            top:205
        },500)
        $('.models-1').css('display', 'block')
        $('.shangchuan-1').css('display', 'none')
        $.ajax({
            type: "post",
            url: basePath + '/contract/add-selfTemplate',
            async: false,
            data: {
                "id":id,
                "templatePath":selfTemplate.path
            },
            dataType: "json",
            success: function (data) {
                const userId = data.data.id;
                $('#progress_bar-1 .ui-progress-1 .ui-label').hide();
                $('#progress_bar-1 .ui-progress-1').css('width', '1%');
                const test2 = setInterval(function () {
                    $.ajax({
                        type: "post",
                        url: basePath + "/contract/get-status",
                        data: {
                            'id': userId
                        },
                        dataType: "json",
                        success: function (data) {
                            console.log(data)
                            // Simulate some progress
                            $('#progress_bar-1 .ui-progress-1').animateProgress(92, function () {
                                if (data.data.status === 'success') {
                                    window.clearTimeout(test2);
                                    $(this).animateProgress(100, function () {
                                        $('#main_content-1').slideDown();
                                        $('#fork_me').fadeIn();
                                        $('.wei-1').show();
                                        $("#fanwenid-2").val(data.data.id);
                                        // $('#view').attr('href', basePath + '/contract/start?id=' + data.data.id);
                                    });
                                }
                            });
                        }
                    });
                }, 2000);
            }
        });
    }
})

function view4() {
    const id = $("#fanwenid-2").val();
    window.location.href = basePath + '/contract/start?id=' + id;
    // window.open(basePath+ '/contract/start?id='+encodeURI(id));
}

function view5() {
    const id = $("#fanwenid").val();
    window.location.href = basePath + '/contract/start?id=' + id;
    // window.open(basePath + '/contract/start?id='+encodeURI(id));
}

function view6() {
    $('.models-1').css('display','none')
    const id = $("#fanwenid").val();
    // window.location.href = basePath + '/contract/start?id=' + id;
    window.open(basePath + '/contract/start?id='+encodeURI(id));
}

function view7() {
    $('.models-6').css('display','none')
    const id = $("#imageId").val();
    // window.location.reload();
    // window.location.href = basePath + '/imagedoc/start?id=' + id;
    window.open(basePath + '/imagedoc/start?id='+encodeURI(id));
    $(".list").css("display", "block")
    $(".list-1").css("display", "none")
    $(".list-2").css("display", "none")
    $(".list-3").css("display", "none")
    $('#progress_bar-2 .ui-progress-1').animateProgress(0);
    $('.wei-2').hide();
}


$('.start-3').click(function () {
    $('.models-6').css('display','none')
    $('.kuang-1').css('display','block')
})

$('#result_fanwen').click(function () {
    var idd=contract.message;
    if(idd=='1'){
        window.open(basePath + '/contract/start?id='+encodeURI(contract.data.id));
    } else if(flag2>0){
        const id = $("#fanwenid").val();
        if(id!==""){
            window.open(basePath + '/contract/start?id='+encodeURI(id));
        }
    }else {
        flag2=flag2+1;
        $('.models-1').css('display', 'block')
        $('.kuang').css('display', 'block');
        $('.kuang-1').css('display', 'none')
        var id = $("#docId").val();
        $.ajax({
            type: "post",
            url: basePath + '/contract/add-contract3',
            async: false,
            data: {
                "id": id
            },
            dataType: "json",
            success: function (data) {
                const userId = data.data.id;
                $('#progress_bar-5 .ui-progress-1 .ui-label').hide();
                $('#progress_bar-5 .ui-progress-1').css('width', '1%');
                const test1 = setInterval(function () {
                    $.ajax({
                        type: "post",
                        url: basePath + "/contract/get-status",
                        data: {
                            'id': userId
                        },
                        dataType: "json",
                        success: function (data) {
                            console.log(data)
                            // Simulate some progress
                            $('#progress_bar-5 .ui-progress-1').animateProgress(92, function () {
                                if (data.data.status === 'success') {
                                    window.clearTimeout(test1);
                                    $(this).animateProgress(100, function () {
                                        $('#main_content').slideDown();
                                        $('#fork_me').fadeIn();
                                        $('.wei').show();
                                        $("#fanwenid").val(data.data.id);
                                        // $('#view').attr('href', basePath + '/contract/start?id=' + data.data.id);
                                    });
                                }
                            });
                        }
                    });
                }, 2000);
            }
        });
    }
})

$('#result_tuwen').click(function () {
    if($.isEmptyObject(imageContent)){
        layer.msg("请先上传pdf文件！");
    }else if(!$.isEmptyObject(imageContent)&&!$.isEmptyObject(imageContent2)&&imageContent==imageContent2){
        layer.msg("文件比对过了，请到列表查看！");
    }else {
        imageContent2=imageContent;
        $('.models-6').css('display', 'block');
        $('.kuang-1').css('display', 'none');
        var id = $("#docId").val();
        $('#progress_bar-2 .ui-progress-1').animateProgress(35, function () {
            $.ajax({
                type: "post",
                url: '/image/addImageDoc3',
                async: false,
                data: {
                    "id": id,
                    "imageName": imageContent.fileName,
                    "imagePath": imageContent.path
                },
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    const imagePath = data.data.imagePath;
                    const test2 = setInterval(function () {
                        $.ajax({
                            type: "post",
                            url: "/image/get-status",
                            data: {
                                'imagePath': imagePath
                            },
                            dataType: "json",
                            success: function (data) {
                                console.log(data)
                                $('#progress_bar-2 .ui-progress-1').animateProgress(92, function () {
                                    if (data.data.status == 'success') {
                                        window.clearTimeout(test2);
                                        $("#progress_bar-2 .ui-progress-1").animateProgress(100, function () {
                                            $('#main_content-6').slideDown();
                                            $('#fork_me').fadeIn();
                                            $('.wei-2').show();
                                            $('#imageId').val(data.data.id);
                                            // $('#view1').attr('href', basePath + '/imagedoc/start?id=' + data.data.id);
                                        }, 4000);
                                    }
                                });
                            }
                        });
                    }, 3000);
                }
            });
        });
    }
})


$('.ding-11').click(function () {
    $(".list").css("display", "block")
    $(".list-1").css("display", "none")
    $(".list-2").css("display", "none")
    $(".list-3").css("display", "none")
    $('#progress_bar-2 .ui-progress-1').animateProgress(0);
    $('.wei-2').hide();
})
$('.ding-12').click(function () {
    $(".list").css("display", "block")
    $(".list-1").css("display", "none")
    $(".list-2").css("display", "none")
    $(".list-3").css("display", "none")
    getDocumentList();
})

