import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  standalone: true,

})

export class FeaturesComponent {
  @Input() icon: string = ''; // Icon path
  @Input() title: string = 'هنا عنوان فرعي'; // Default title
  @Input() description: string = 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة'; // Default description
}
