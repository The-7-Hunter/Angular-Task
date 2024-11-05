import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss'
})
export class QuickActionsComponent {
  items = [
    { icon: 'assets/quickActions1.svg', },
    { text: 'LOGO' },
    { icon: 'assets/quickActions2.svg' }
  ];
}

