import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {
  constructor(private router: Router) { }

  onLogoutClick() {
    this.router.navigate(['/'])
  }

}
