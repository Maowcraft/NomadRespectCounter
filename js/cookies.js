function load() {
  loadCounter();
  loadHistory();
}

function saveCounter(count) {
  document.cookie = 'count='+count+';expires=Tue, 19 Jan 2038 03:00:00 UTC;SameSite=Strict;';
}

function saveHistory(history) {
  document.cookie = 'history='+JSON.stringify(history)+';expires=Tue, 19 Jan 2038 03:00:00 UTC;SameSite=Strict;';
}

function loadCounter() {
  const counter = document.getElementById('counter-count');
  const cookie = getCookie('count');
  if (cookie != '') {
      counter.innerHTML = getCookie('count');
  } else {
      counter.innerHTML = 0;
  }
}

function loadHistory() {
  const cookie = getCookie('history');
  if (cookie != '') {
    historyList = JSON.parse(getCookie('history'));
  }
  setHistory();
}

// credit to w3schools:
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}