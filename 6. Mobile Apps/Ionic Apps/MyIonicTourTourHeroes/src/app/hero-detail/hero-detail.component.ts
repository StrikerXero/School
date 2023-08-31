import { Component, Input } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero?: HomePage;
  // @Input() heroes: Hero[] = [];
  // @Input() selectedHero?: Hero;
}
