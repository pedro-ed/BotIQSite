export function SetConfig() {
    var CicloMax = document.getElementById("cm").value
    var MomentAction = document.getElementById("ma").value
    var NConjunts = document.getElementById("nc").value
    var profitMin = document.getElementById("pm").value
    var reconnectN = document.getElementById("r").value
    var sequenciaAlvo = document.getElementById("se").value 
    var timeframe = document.getElementById("tf").value
    var valorBase = document.getElementById("vb").value
    const values = [CicloMax,MomentAction,NConjunts,profitMin,reconnectN,sequenciaAlvo,timeframe,valorBase]
    const settings = {
        "async": false,
        "crossDomain": true,
        "timeout": 30000,
        "url": "https://apibots-937d3.firebaseio.com/Botmanager/Confg/-MO4B5xmRsMiNC4qEzMO.json",
        "method": "PUT",
        "headers": {
          "Content-Type": "application/json"
        },
        "data":`{
        \n  \"CicloMax\": ${CicloMax},
        \n  \"MomentAction\": ${MomentAction},
        \n  \"NConjunts\": ${NConjunts},
        \n  \"profitMin\": ${profitMin},
        \n  \"reconnectN\": ${reconnectN},
        \n  \"sequenciaAlvo\": ${sequenciaAlvo},
        \n  \"timeframe\":${timeframe},
        \n  \"valorBase\":${valorBase}
        \n}`
    };
      
      const resp = $.ajax(settings).done(function (response) {
        return response
      });
}