import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-board',
  templateUrl: './manage-board.component.html',
  styleUrls: ['./manage-board.component.css']
})
export class ManageBoardComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  userInfo: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userInfo = this.authenticationService.userInfo;
  }

  cancelarSubscricao() {
    this.loading = true;
    this.authenticationService.remove()
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/login']);
          this.model = {};
        } else {
          this.model = {};
        }
      });
  }

  renovarServico() {
    let d = new Date();
    let dataServico = new Date(d.getFullYear() + 2, d.getMonth(), d.getDate());
    this.loading = true;
    this.authenticationService.renew(dataServico)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/login']);
          this.model = {};
        } else {
          this.model = {};
        }
      });
  }
}
