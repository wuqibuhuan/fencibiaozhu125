// //  范文渲染
// function ajax_test() {
//     $.ajax({
//         url:  + "",
//         type: "GET",
//         dataType: "json",
//         data: {
//             'id': $("input[name='contract_id']").val(),
//         },
//         success: function (data) {
//             console.log(data)
//             var str = "<ul>";
//             var ste = "<ul>";
//             var index = [];
//             var index1 = [];
//             $.each(eval('(' + data.data.content + ')').items, function (i, n) {
//                 if (n.operation == 'none') {
//                     n["new"] = "<font color='gray'>" + n["new"] + "</font>";
//                     n["old"] = "<font color='gray'>" + n["old"] + "</font>";
//                 }
//                 if (n.operation == 'delete') {
//                     n["new"] = "<font color='red'>" + n["new"] + "</font>";
//                     n["old"] = "<font color='red'>" + n["old"] + "</font>";
//                 }
//                 if (n.operation == 'insert') {
//                     n["new"] = "<font color='red'>" + n["new"] + "</font>";
//                     n["old"] = "<font color='red'>" + n["old"] + "</font>";
//                 }
//                 if (n.operation !== 'none' && n.operation !== 'insert' && n.operation !== 'delete') {
//                     index.push(i)
//                 }
//                 // if (n.operation === 'insert'||n.operation=='delete') {
//                 //     index1.push(i)
//                 // }

//                 str += "<li>" + n["new"] + "</li>";
//                 ste += "<li>" + n["old"] + "</li>";
//             });

//             str += "</ul>";
//             ste += "</ul>";

//             $("#test").append(str);
//             $("#biaoti").text(data.data.new);
//             $("#biaod").text(data.data.old);
//             $("#tests").append(ste);
//             for (var j = 0; j < index.length; j++) {
//                 $("#test").find('ul').find('li').eq(index[j]).addClass('txtColor');
//                 $("#tests").find('ul').find('li').eq(index[j]).addClass('txtColorRed');
//             };

//             // for (var k = 0; k < index1.length; k++) {
//             //     $("#tests").find('ul').find('li').eq(index1[k]).addClass('txtColorRed');
//             // }
//             var a = $("#tests").find('ul').find('li').length;
//             for (var m = 0; m < a; m++) {
//                 if ($("#test").find('ul').find('li').eq(m).height() > $("#tests").find('ul').find('li').eq(
//                         m).height()) {
//                     $("#tests").find('ul').find('li').eq(m).height($("#test").find('ul').find('li').eq(m).height())
//                 } else {
//                     $("#test").find('ul').find('li').eq(m).height($("#tests").find('ul').find('li').eq(m).height())
//                 }
//             }


//         }
//     })
// }
// ajax_test();