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