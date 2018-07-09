import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Client } from '../models/client';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class ClientesService {

  clientList: Array<Client> = [
    {name:'Primark',initials:'PRK',connectionName:'CN1',endpoint:'1'},
    {name:'Sears',initials:'SRS',connectionName:'CN2',endpoint:'2'},
    {name:'Wiggle',initials:'WGL',connectionName:'CN3',endpoint:'3'},
  ];

  private clientesUrl = 'http://localhost:8080/api/Client';
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) { }


  getClientes(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientesUrl/*,this.getHeaders()*/);
  }

  postClient(): Observable<Client[]> {
    console.log(this.http.post<Client[]>(this.clientesUrl,this.clientList));
    return this.http.post<Client[]>(this.clientesUrl,this.clientList);
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