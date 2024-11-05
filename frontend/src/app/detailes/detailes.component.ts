import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailes.component.html',
  styleUrl: './detailes.component.scss'
})

export class DetailesComponent {
  infoItems = [{
    id: 'id1',
    title: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
    icon: 'itemIcon.svg',
  }, {
    id: 'id2',
    title: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
    icon: 'itemIcon.svg',

  }, {
    id: 'id3',
    title: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
    icon: 'itemIcon.svg',
  }]

}

