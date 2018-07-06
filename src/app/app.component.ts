import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OLR - Ticketing System Web Integrator';
  subscriptionAuth: Subscription;
  userInfo: User;
  constructor(
    private authenticationService: AuthenticationService,
    private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.userInfo = this.authenticationService.userInfo;
    this.subscriptionAuth =
      this.authenticationService.authentication.subscribe((userInfo) => {
        this.userInfo = userInfo;
        this.cdr.detectChanges();
      });

      console.log("Ola");




  }
  ngOnDestroy() {
    this.subscriptionAuth.unsubscribe();
  }
}
