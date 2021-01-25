document.writeln(`<header class="nav">
<img src="./static/img/yemei.png" alt="" style="float: left" id="yemei-1">
<ul style="float: right"  class="cal_ul">
  
   
    <li style="float: right">
        <a onclick="biaozhu()" class= "jing">标注管理</a>
    </li>
    <li style="float: right">
        <a onclick="cizhu()" class="zeng">词库管理</a>
    </li>
    <li style="float: right">
        <a onclick="wendang()" class="ku">文档列表</a>
    </li>
    <li style="float: right">
        <a  onclick="view()" class="zi">首页</a>
    </li>
</ul>
<div class="clearfix"></div>
   
</header>
`)


// <li style="float: right">
//     <a onclick="vie()" class="hou">后台入口</a>
// </li>


function vie () {
  var url = "./data-administration.html?time=" + time;
  window.location.href = url;
}
function view () {

  var url = "./home.html";
  window.location.href = url;

}
function cizhu () {
  var url = "./cizhu-lable.html?id=" + id;
  window.location.href = url;
}
function biaozhu () {
  var url = "./biaozhu-lable.html?id=" + id;
  window.location.href = url;
}
function viewsss () {
  var url = "./report-list.html?time=" + time;
  window.location.href = url;
}
function wendang () {
  var url = "./index.html?id=" + id;
  window.location.href = url;
}