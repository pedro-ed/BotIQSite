import {UpdateLucroDia} from "../../../private/services/Deshboard/Update.js"
import {AjustLink} from "../../../private/services/Links/Ajuste.js"
import {sair} from '../../../private/auth/sair.js'
import {ExitLooding,InitLooding} from '../../../private/UI/Loding/Loding.js'
// Updates
AjustLink()

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

