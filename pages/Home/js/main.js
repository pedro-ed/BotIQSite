import {UpdateLucroDia,UpdateTable} from "../../../private/services/Deshboard/Update.js"
import {AjustLink} from "../../../private/services/Links/Ajuste.js"
import {sair} from '../../../private/auth/sair.js'
import {ExitLooding,InitLooding} from '../../../private/UI/Loding/Loding.js'
// Updates
AjustLink()
UpdateTable(true,"")


UpdateLucroDia()
$("#updatevalueToday").click(function (e) { 
    e.preventDefault();
    UpdateLucroDia()
    InitLooding("loding",true,500,"medio",false)
});

$("#sair").click(function (e) { 
    e.preventDefault();
    sair()
});

$("#inputDate").change(function (e) { 
    e.preventDefault();
    var value = e.target.value.split("-")
    var ano = parseInt(value[0])
    var mes = parseInt(value[1])
    var dia = parseInt(value[2])
    var data = `${dia}/${mes}/${ano}`
    UpdateTable(false,data)
});




