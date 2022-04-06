function GetHtml(name, id) {
  var request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  try {
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        var val = request.responseText;
        document.getElementById(id).innerHTML = val;
      }
    };
    request.open("GET", name, true);
    request.send();
  } catch (e) {
    console.log("Unable to connect to server");
  }
}
