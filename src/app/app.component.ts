import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from './services/authentication.service';
import { ClientesService } from './services/clientes.service';
import { TestService } from './services/test.service';
import { User } from './models/user';
import { Client } from './models/client';
import { HttpClientModule }  from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OLR - Ticketing System Web Integrator';
  subscriptionAuth: Subscription;
  userInfo: User;
  clientInfo: Client[];
  constructor(
    private authenticationService: AuthenticationService,
    private cdr: ChangeDetectorRef/*,private clientesService : ClientesService,private testService: TestService*/) { }
    
  ngOnInit() {
    this.userInfo = this.authenticationService.userInfo;
    this.subscriptionAuth =
      this.authenticationService.authentication.subscribe((userInfo) => {
        this.userInfo = userInfo;
        this.cdr.detectChanges();
      });


    //this.testService.sayHello();
    //console.log("ok")

    //if(this.clientesService.getClientes()){
    //  console.log("funcao corrida");
    //}
      

  }
  ngOnDestroy() {
    this.subscriptionAuth.unsubscribe();
  }
}
