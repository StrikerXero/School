import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
// import { AppModule } from '../../app/app.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // @Input() appHeroes!: HeroesComponent;

  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
