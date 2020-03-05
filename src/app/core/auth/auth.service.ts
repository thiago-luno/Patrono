import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';


let API_URL = "";

if(document.domain == "tercadaserra.sgmaci.digital" || document.domain == "quintadacolina.sgmaci.digital") {
    API_URL = "services.sgmaci.digital";
} else {
    API_URL = "dev.gateway.sgmaci.intranet";
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    mostrarMenuEmitter = new EventEmitter<boolean>();
    
    constructor(
        private http: HttpClient,
        private userService: UserService) { }

    authenticate(user: Object) {

        return this.http
          .post<any>(
            `${location.protocol}//access-authentication-gw.${API_URL}/v1/authenticator`, 
            user,
            { observe: 'response' }
          )
          .pipe(tap (
              res => {
                const authToken = res.body.data;
                this.userService.setToken(authToken);
                this.mostrarMenuEmitter.emit(true);
                console.log('testre')
            }, err => {
                console.log('err', err);
                this.mostrarMenuEmitter.emit(false);
            })       
        )}
}

// tecnologia@tercadaserra.com.br