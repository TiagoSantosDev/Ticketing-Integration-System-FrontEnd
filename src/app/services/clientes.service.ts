import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Client } from '../models/client';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class ClientesService {

  private clientesUrl = 'http://localhost:8080/api/Client';
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) { }


  getClientes(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientesUrl/*,this.getHeaders()*/);
  }

  getHeaders() {
    let headers = new HttpHeaders({
      'x-access-token':
        this.authenticationService.userInfo.token
    });

    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }
}