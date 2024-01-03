import { EmailValidator } from "@angular/forms"

export interface SignUp {
    name:String,

    email:EmailValidator,
    password:String
}

export interface LogIn{
    email:EmailValidator,
    password:String
}

