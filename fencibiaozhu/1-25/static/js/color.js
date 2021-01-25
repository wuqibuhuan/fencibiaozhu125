
if (value.indexof(data[i].word) != -1) {
  var str = $('#cont').val();

  var re = new RegExp(data[i].word, "g"); //定义正bai则表达式
  //第一个参数du是zhi要替换dao掉的zhuan内容，shu第二个参数"g"表示替换全部（global）。
  var Newstr = value.replace(re, 'wo shi ni daye'); //第一个参数是正则表达式。
  //本例会将全部匹配项替换为第二个参数。
  //                 alert(Newstr);
  $('#demo').html(Newstr);
}
