function getAjax(url, success) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
  xhr.open('GET', url)
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status == 200) {
      success(xhr.responseText)
    }
  }
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.send()
  return xhr
}

function getCORS(url, success) {
  var xhr = new XMLHttpRequest()
  if (!('withCredentials' in xhr)) xhr = new XDomainRequest() // fix IE8/9
  xhr.open('GET', url)
  xhr.onload = success
  xhr.send()
  return xhr
}

function parsePostParams(data) {
  if (typeof data == 'string') {
    return data
  } else {
    return Object.keys(data).map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join('&')
  }
}

function postAjax(url, data, success) {
  var params = parsePostParams(data)
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
  xhr.open('POST', url)
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status == 200) {
      success(xhr.responseText)
    }
  }
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send(params)
  return xhr
}

function postCORS(url, data, success) {
  var params = parsePostParams(data)
  var xhr = new XMLHttpRequest()
  if (!('withCredentials' in xhr)) xhr = new XDomainRequest() // fix IE8/9

  xhr.open('POST', url)
  xhr.onload = success
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send(params)
  return xhr
}
