export function enviaMsg_API(data) {
    const xhttp = new XMLHttpRequest()
    let jsondata = JSON.stringify(data)
    xhttp.open("POST", "https://u5niarwjq0.execute-api.us-east-1.amazonaws.com/teste")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send(jsondata)
}

export function recebeMsg_API(data) { // recebe um dicionário da seguinte forma {"from": "alguém", "to": "alguém"}
    const xhttp = new XMLHttpRequest()
    let jsondata = JSON.stringify(data)
    xhttp.open("GET", "https://u5niarwjq0.execute-api.us-east-1.amazonaws.com/teste", true)
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send(jsondata)
}