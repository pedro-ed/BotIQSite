import {fireCore} from '../Firebase/FirebaseInit.js'
import {base64EncodeUnicode} from '../services/Base64Encode/StringToBase64.js'
export function Login(email,senha){
    const firebaseAuth = fireCore.auth().signInWithEmailAndPassword(email, senha).then(function (result) {
        const status = result['operationType']
        console.clear()
        console.log(result)
        if (status == "signIn") {
            const date = new Date
            console.log(result['user']['refreshToken'])
            const mes = String(date.getMonth()+1)
            const day = String(date.getDate())
            const UID = result['user']['uid']
            // refreshToken
            const REFRESHTOKEN = result['user']['refreshToken']

            localStorage.setItem("UID",UID)
            localStorage.setItem("REFRESHTOKEN",REFRESHTOKEN)
            localStorage.setItem("SESSION",base64EncodeUnicode(day+mes))

            var url = document.location.href.replace("login","home") 
            document.location.href = url
        }
    })
}

