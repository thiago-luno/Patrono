import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatFormDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { UserService } from "src/app/core/user/user.service";


@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SignInComponent implements OnInit {
    
    loginForm: FormGroup;
    error: boolean;
    @ViewChild('loginInput') loginInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private router: Router,
        private platFormDetectorService: PlatFormDetectorService) {

            if (this.userService.isLogged())
                this.router.navigate(['/monitor']); 
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
            () => this.router.navigate([
                '/monitor'
            ]),
            err => {
                console.log(err);
                this.error = true;
                this.loginForm.reset();
                this.platFormDetectorService.isPlatformBrowser() &&
                    this.loginInput.nativeElement.focus();
            }
        );
    }
}