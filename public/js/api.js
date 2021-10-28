export function enviaMsg_API(data) {
    const xhttp = new XMLHttpRequest()
    let jsondata = JSON.stringify(data)
    xhttp.open("POST", "http://localhost:5002/mensagens")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send(jsondata)
}

export function recebeMsg_API(to) {
    const xhttp = new XMLHttpRequest()
    xhttp.responseType = "arraybuffer"
    let url = "http://localhost:5002/mensagens/"+to
    xhttp.open("GET", url)
    xhttp.send()
    return xhttp.response
}