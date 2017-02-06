const myScript = {
  request: function (objectRequest) {
    var req = new XMLHttpRequest()
    req.open(objectRequest.type, objectRequest.url, true)

    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        var resp = req.responseText
        objectRequest.success(resp)
      } else {
        console.log('ini error pertama')
      }
    }
    req.onerror = function () {
      console.log('ini error kedua')
    }

    req.send()
  },
  tweet: function (objectRequest) {
    var req = new XMLHttpRequest()
    req.open(objectRequest.type, objectRequest.url, true)

    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        var resp = req.responseText
        objectRequest.success(resp)
      } else {
        console.log('ini error pertama')
      }
    }
    req.onerror = function () {
      console.log('ini error kedua')
    }

    req.send()
  }

}
