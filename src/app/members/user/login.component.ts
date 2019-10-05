import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px; }
        button { width:45%; }
        .btn-primary { margin-right:10%; }
    `]
})
export class LoginComponent {
    username
    password
    mouseoverLogin

    constructor(private authService:AuthService, private router:Router){

    }

    login(formValues){
        this.authService.loginUser(formValues.username, formValues.password)
        this.router.navigate(['home'])
        console.log(formValues)
    }

   cancel(){
        this.router.navigate(['members'])
    }
}