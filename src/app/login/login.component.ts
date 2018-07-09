import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService) {}
  ngOnInit() {
    this.authenticationService.logout();
    this.activatedRoute.params.subscribe(params => {
      if (params['u'] !== undefined) {
        ;
        this.error = 'Error';
      }
    });
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email,
      this.model.password)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
        }
      });
  }
}
