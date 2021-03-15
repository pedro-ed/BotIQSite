import {Verify} from './verifyLogin.js'

export function sair() {
    localStorage.removeItem("SESSION");
    localStorage.removeItem("REFRESHTOKEN");
    localStorage.removeItem("UID")
    document.location.href = "http://"+location.host+"/pages/login"
}