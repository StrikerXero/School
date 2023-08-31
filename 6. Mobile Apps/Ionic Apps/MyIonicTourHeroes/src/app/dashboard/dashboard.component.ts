import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public heroService: HeroService) { }
  heroes: Hero[] = []

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit() {
    // this.getHeroes();
  }


}
