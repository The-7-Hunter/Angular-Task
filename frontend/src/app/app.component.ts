import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailesComponent } from './detailes/detailes.component';
import { FeaturesComponent } from './features/features.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, DetailesComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
