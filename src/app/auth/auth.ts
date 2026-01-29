import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email||!this.password) {
      alert('Enter E-mail and Password');
      return;
    }
    this.router.navigate(['/tasks']);
  }
}
