var txt = '';
var content = '';
$('.tect-1').mouseup(function () {

  if (document.selection) {
    txt = document.selection.createRange().text;
  } else {
    txt = document.getSelection();
  }
  content = txt.toString();
});

$("#entity").click(function () {
  $(".entity").css("display", "block")
  $(".relation").css("display", "none")
  $(".property").css("display", "none")
})
// $("#relation").click(function () {



// })

// $("#property").click(function () {

//   // }
// })


























