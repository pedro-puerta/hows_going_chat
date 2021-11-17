export function PostMsg(corpo) {
    let jsondata = JSON.stringify(corpo)
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://o5bbyytss4.execute-api.us-east-1.amazonaws.com/prod");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(jsondata);
}

export function GetMsg(from, to) {
    const xhttp = new XMLHttpRequest()

    var consulta = "?from=" + from + "&to=" + to
    xhttp.open("GET", "https://o5bbyytss4.execute-api.us-east-1.amazonaws.com/prod" + consulta)
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send()
    console.log(xhttp.responseText)
}



