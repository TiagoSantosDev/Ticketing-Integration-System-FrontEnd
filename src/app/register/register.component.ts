import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  d = new Date();
  dataServ = new Date(this.d.getFullYear() + 2, this.d.getMonth(), this.d.getDate());
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService) { }

  register() {
    this.loading = true;
    this.registerService.register(this.model.name, this.model.email, this.model.password)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          console.log(result);
          this.error = 'Registration failed!';
        }
      });
  }
  ngOnInit() {
  }

}