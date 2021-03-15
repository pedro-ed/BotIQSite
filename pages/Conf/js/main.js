import {GetConfig} from "../../../private/services/Config/GetConfg.js"
import {SetConfig} from "../../../private/services/Config/SetConfg.js"
import {sair} from '../../../private/auth/sair.js'
import {AjustLink} from "../../../private/services/Links/Ajuste.js"
// Updates
AjustLink()

// Get Config 
GetConfig()



// Set Config

$("#save-Config").click(function (e) { 
    e.preventDefault();
    SetConfig()
});

$("#sair").click(function (e) { 
    e.preventDefault();
    sair()
});
