import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    if(this.form.valid) {
      this.authService.authenticate(this.form.value);
      this.router.navigate(['/']);
    }
  }

}
