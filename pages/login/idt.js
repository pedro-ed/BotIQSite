import {Verify} from '../../private/auth/verifyLogin.js'
import {Login} from "./../../private/auth/login.js"
import {InitLooding,ExitLooding}from "../../private/UI/Loding/Loding.js"
Verify()


document.getElementById("loginOn").addEventListener("click",()=>{
    var user = document.querySelector("#exampleInputEmail1").value
    var pass  = document.querySelector("#exampleInputPassword1").value
    InitLooding("loding",false,0)
    Login(user,pass)
    ExitLooding()
})
