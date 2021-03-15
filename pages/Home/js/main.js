import {UpdateLucroDia} from "../../../private/services/Deshboard/Update.js"
import {AjustLink} from "../../../private/services/Links/Ajuste.js"
import {sair} from '../../../private/auth/sair.js'
// Updates
AjustLink()
UpdateLucroDia()


$("#updatevalueToday").click(function (e) { 
    e.preventDefault();
    UpdateLucroDia()
});

$("#sair").click(function (e) { 
    e.preventDefault();
    sair()
});

