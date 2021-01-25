var basePath = "http:\/\/172.16.1.120:8888/nlp";









function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
var id = getQueryString(name = "id")

// var conId = getQueryString(name = "conId");

