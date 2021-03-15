export function GetConfig() {
    var ids = []
    var url = "https://apibots-937d3.firebaseio.com/Botmanager/Confg/-MO4B5xmRsMiNC4qEzMO.json"
    $.ajax({
        type: "GET",
        url: url,
        data: "",
        dataType: "json",
        success: function (response) {
            console.log(response)
            var CicloMax = response["CicloMax"]
            var MomentAction = response["MomentAction"]
            var NConjunts = response["NConjunts"]
            var profitMin = response["profitMin"]
            var reconnectN = response["reconnectN"]
            var sequenciaAlvo = response["sequenciaAlvo"]
            var timeframe = response["timeframe"]
            var valorBase = response["valorBase"]

            document.getElementById("cm").value = CicloMax
            document.getElementById("ma").value = MomentAction
            document.getElementById("nc").value = NConjunts
            document.getElementById("pm").value = profitMin
            document.getElementById("r").value  = reconnectN
            document.getElementById("se").value = sequenciaAlvo
            document.getElementById("tf").value = timeframe
            document.getElementById("vb").value = valorBase 
        }
    });
}