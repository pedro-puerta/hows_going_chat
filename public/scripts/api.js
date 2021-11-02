export function enviaMsg_API(data) {
    const xhttp = new XMLHttpRequest()
    let jsondata = JSON.stringify(data)
    xhttp.open("POST", "https://u5niarwjq0.execute-api.us-east-1.amazonaws.com/teste")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send(jsondata)
}


export function mensagens_recebidas(from, to){
    lista_mensagens = get_all_API()
    mensagens_filtradas = []
    for (i in lista_mensagens){
        if (i["from"] == from && i["to"] == to){
            mensagens_filtradas.push(i["msg"])
        }
    }
    return mensagens_filtradas
}


function get_all_API() { // retorna um dicionário com todas as mensagens do banco
    var xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    xhr.open("GET", "https://u5niarwjq0.execute-api.us-east-1.amazonaws.com/teste/getall")
    xhr.send()
    return xhr.responseXML
}