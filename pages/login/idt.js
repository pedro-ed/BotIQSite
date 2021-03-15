import {Verify} from '../../private/auth/verifyLogin.js'
import {Login} from "./../../private/auth/login.js"
Verify()


document.getElementById("loginOn").addEventListener("click",()=>{
    var user = document.querySelector("#exampleInputEmail1").value
    var pass  = document.querySelector("#exampleInputPassword1").value
    Login(user,pass)
})
