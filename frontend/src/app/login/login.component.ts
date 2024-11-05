import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  constructor(private router: Router) { }
  idNumber: string = '';
  password: string = '';
  email: string = '';
  public isResetPasswordMode: boolean = false;


  onSubmit() {
    this.router.navigate(['/user-home'])
    if (this.isResetPasswordMode) {
      //   // Handle reset password form submission logic
      //   console.log('Reset password submitted:', this.email);
      // } else {
      //   // Handle login form submission logic
      //   console.log('Login submitted:', this.idNumber, this.password);
      // }
    }
  }
  onBackBtnClick() {
    this.router.navigate(['/'])
  }
}

