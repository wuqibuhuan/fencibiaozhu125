
function ye1() {
    var url = "./xinci.html?time=" + time;
    window.location.href = url;
}
function ye2() {
    var url = "./data-administration.html?time=" + time;
    window.location.href = url;
}
function ye3() {
    var url = "./suanzi.html?time=" + time;
    window.location.href = url;
}
function ye4() {
    var url = "./guize.html?time=" + time;
    window.location.href = url;
}
function ye5() {
    var url = "./corpus.html?time=" + time;
    window.location.href = url;
}
function ye6() {
    var url = "./measurement.html?time=" + time;
    window.location.href = url;
}
function ye7() {
    var url = "./production.html?time=" + time;
    window.location.href = url;
}
function ye8() {
    var url = "./port.html?time=" + time;
    window.location.href = url;
}
function ye9() {
    var url = "./setting.html?time=" + time;
    window.location.href = url;
}









function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
var time = getQueryString( name= "time")

console.log(time)
