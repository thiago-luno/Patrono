import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    constructor(private http: HttpClient) { }

    authenticate(user: Object) {
        return this.http.post(`${location.protocol}//access-authentication-gw.${API_URL}/v1/authenticator`, user )
    }
}