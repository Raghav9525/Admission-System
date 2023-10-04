

import React from 'react'

function LoginValidation(values) {
  
    let error={}

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