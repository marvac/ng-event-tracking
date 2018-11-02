import { AuthService } from './auth.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styles: [
        `
        em { 
            float: right; 
            color: #e05c65; 
            font-size: 14px;
            padding-left: 10px;
            }
        `
    ]
})
export class LoginComponent {

    mouseOverLogin: boolean;
    loginInvalid = false

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe(response => {
            if (!response){
                this.loginInvalid = true
            }
            else{
                this.router.navigate(['events'])
            }
        })
    }

    cancel() {
        this.router.navigate(['events']);
    }
}