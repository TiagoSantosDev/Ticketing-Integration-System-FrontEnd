import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';

class Response { message: string };
@Injectable()
export class RegisterService {
  private authUrl = 'endpoint';

  constructor(
    private http: HttpClient
  ) { }
  register(name: string, email: string, password: string) {
    return new Observable<boolean>(observer => {
      this.http.post<Response>(this.authUrl, {
        name: name,
        email: email,
        password: password,
      }).subscribe(data => {
        if (data.message == 'user registered!') {
          console.log(data.message );
          observer.next(true);
        } else {
          console.log(data.message );
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
}
