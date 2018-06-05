import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/user';

class Token { token: string };
class Response { message: string };
@Injectable()
export class AuthenticationService {
  private authUrl = 'endpoint';
  public userInfo: User;
  authentication: Subject<User> = new Subject<User>();
  constructor(
    private http: HttpClient
  ) {
    this.userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo);
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post<Token>(this.authUrl, {
        email: email,
        password: password
      })
        .subscribe(data => {
          if (data.token) {
            const tokenDecoded = jwt_decode(data.token);
            if (tokenDecoded.user != true) {
              this.userInfo = {
                token: data.token,
                tokenExp: tokenDecoded.exp,
                name: tokenDecoded.name,
                user: tokenDecoded.user
              }
              localStorage.userInfo = JSON.stringify(this.userInfo);

              this.authentication.next(this.userInfo);
              observer.next(true);
            } else {
              this.authentication.next(this.userInfo);
              observer.next(false);
            }
          } else {
            this.authentication.next(this.userInfo);
            observer.next(false);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
          console.log(err);
          this.authentication.next(this.userInfo);
          observer.next(false);
        });
    });
  }

  logout() {
    this.userInfo = null;
    localStorage.removeItem('userInfo');
    this.authentication.next(this.userInfo);
  }

  remove(): Observable<boolean> {
    let resetUrl = 'endpoint';
    return new Observable<boolean>(observer => {
      this.http.put<Response>(resetUrl, {
      }, this.getHeaders())
        .subscribe(data => {
          if (data.message  == "user removed!") {
            console.log(data.message);
            observer.next(true);
          } else {
            console.log(data.message);
            observer.next(false);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
          console.log(err);
          observer.next(false);
        });
    });
  }

  renew(dataServico : Date): Observable<boolean> {
    let renewUrl = 'endpoint';
    return new Observable<boolean>(observer => {
      this.http.put<Response>(renewUrl, {
        dataServico : dataServico
      }, this.getHeaders())
        .subscribe(data => {
          if (data.message  == "date updated!") {
            console.log(data.message);
            observer.next(true);
          } else {
            console.log(data.message);
            observer.next(false);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
          console.log(err);
          observer.next(false);
        });
    });
  }

  getHeaders() {
    let headers = new HttpHeaders({
      'x-access-token':
        this.userInfo.token
    });

    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }
}
