import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Hero } from '../hero';
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    public navCtrl: NavController,
    private messageService: MessageService
  ) {}

  // title = 'Tour of Heroes';
  // hero = 'Windstorm';
  heroes: Hero[] = [];

  // selectedHero?: Hero;

  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
