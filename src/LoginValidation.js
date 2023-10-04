

// import React from 'react'

function LoginValidation(values) {
  
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/
    const password_pattern = /^[?=.\d](?=.*[a-z])(?=.*[A-Z])+[a-zA-Z0-9]{3,}$/

    if(values.nam ===""){
        error.nam ="Name should not empty"
    }
    else{
        error.nam =""
    }

    if(values.email ===""){
        error.email ="Email should not empty"
    }
    else if( !email_pattern.test(values.email)){
        error.email= "Email Didn't match"
    }
    else{
        error.email =""
    }

    if(values.password ===""){
        error.password ="Password should not empty"
    }
    else if( !password_pattern.test(values.password)){
        error.password= "Password Didn't match"
    }
    else{
        error.password =""
    }

    return error

}

export default LoginValidation