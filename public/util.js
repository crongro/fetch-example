function $(selector) {
    return document.querySelector(selector);
}

function fetchManager({ url, method, body, headers, callback }) {
    fetch(url, {
        method,
        body,
        headers,
    }).then((response) => {
        return response.json()
    }).then((result) => {
        callback(result)
    })
}


