import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Client } from '../models/client';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class TestService {

  private testUrl = 'http://localhost:8080/api';
  constructor( private http: HttpClient) { }

  sayHello(): Observable<String> {
    console.log(this.http.get<String>(this.testUrl));
    return this.http.get<String>(this.testUrl);
  }


}
