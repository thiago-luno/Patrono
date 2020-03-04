import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SignInComponent implements OnInit {
    
    loginForm: FormGroup;
    @ViewChild('loginInput') loginInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router) {
       
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            login: [''],
            password: ['']
        });
    };

    login() {

        let user = {
            login:  this.loginForm.get('login').value,
            password: this.loginForm.get('password').value
        };

        this.authService
        .authenticate(user)
        .subscribe(
            () => this.router.navigateByUrl('/monitor'),
            err => {
                console.log(err);
                this.loginForm.reset();
                this.loginInput.nativeElement.focus();
                alert('Invalid user name or password');
            }
        );
    }
}