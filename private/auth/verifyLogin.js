import {base64EncodeUnicode} from '../services/Base64Encode/StringToBase64.js'
function restartKeys() {
    localStorage.removeItem("SESSION");
    localStorage.removeItem("REFRESHTOKEN");
    localStorage.removeItem("UID")
}
export const Verify = ()=>{
    if (localStorage.getItem("SESSION")) {
        const session = localStorage.getItem("SESSION")
        const date = new Date
        const mes = String(date.getMonth()+1)
        const day = String(date.getDate())
        const p = day+mes
        const sessionHoje = base64EncodeUnicode(p)
        // alert(sessionHoje == session)
        if (sessionHoje == session) {
            document.location.href = "http://"+location.host+"/pages/Home"
        }else {
            restartKeys();
            // document.location.href = "http://"+location.host+"/pages/login"
        } 
    } else {
        restartKeys(); 
        // document.location.href = "http://"+location.host+"/pages/login"
    }
}