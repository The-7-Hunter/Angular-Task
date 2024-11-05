import { Component } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';
import { DetailesComponent } from '../detailes/detailes.component';
import { FeaturesComponent } from '../features/features.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HeroComponent, DetailesComponent, FeaturesComponent, ContactsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
