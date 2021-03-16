import {ExitLooding,InitLooding} from "../../UI/Loding/Loding.js"
export function UpdateLucroDia() {
    
    var id = "LucroHoje"
    var date = new Date
    var hoje = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    var LucroTotal = 0
    $.ajax({
        type: "GET",
        url: "https://apibots-937d3.firebaseio.com/Botmanager/Logs.json",
        data: "",
        dataType: "json",
        success: function (response) {
            Object.keys(response).forEach(element => {
                
                var lucro = response[element]["lucro"]
                var data = response[element]["data"]
                if (data == hoje) {
                    LucroTotal+=lucro
                }
            });
            console.log(LucroTotal)
            document.getElementById(id).innerText = "R$ "+Math.round(LucroTotal*100)/100
        }
    });
}

export function UpdateTable(hoje,DataFilter) {
    InitLooding("tableHistorico",true,1000,"grande",false)
    
    document.getElementById("table-body").innerHTML = ""
    document.querySelector("#table-total").innerText = "R$ "+Math.round(0*100)/100
    document.querySelector("#total_filtrado").innerText = "R$ "+Math.round(0*100)/100

    var id = "LucroHoje"
    var date = new Date
    if (hoje) {
        DataFilter = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
    document.querySelector("#totalFiltrado").innerText = `Total Filtrado - ${DataFilter}`
    $.ajax({
        type: "GET",
        url: "https://apibots-937d3.firebaseio.com/Botmanager/Logs.json",
        data: "",
        dataType: "json",
        success: function (response) {
            var lucroTotal = 0
            Object.keys(response).forEach(element => {
                var data = response[element]["data"]
                if (data == DataFilter) {
                    var valRow = response[element]
                    var Elrow = document.createElement("tr")
                    lucroTotal += valRow["lucro"]
                    var lucro = "R$ "+Math.round(valRow["lucro"]*100)/100
                    var investiment = "R$ "+Math.round(valRow["investiment"]*100)/100
                    var direcao = valRow["direcao"]=="C"?"Compra":"Venda"
                    var listEl = [valRow["data"],direcao,valRow["hora"],investiment,valRow["resultado"],valRow["tipoConta"],lucro]
                    listEl.forEach(e =>{
                        var row  = document.createElement("td")
                        row.innerText = e
                        Elrow.appendChild(row)
                    })
                    document.getElementById("table-body").appendChild(Elrow)
                    document.querySelector("#table-total").innerText = "R$ "+Math.round(lucroTotal*100)/100
                    
                    document.querySelector("#total_filtrado").innerText = "R$ "+Math.round(lucroTotal*100)/100
                }
            });

        }
    });
}
