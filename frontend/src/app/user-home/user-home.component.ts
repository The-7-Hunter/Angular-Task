import { Component } from '@angular/core';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { UserFooterComponent } from '../user-footer/user-footer.component';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [UserHeaderComponent, UserFooterComponent, QuickActionsComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent {

}
