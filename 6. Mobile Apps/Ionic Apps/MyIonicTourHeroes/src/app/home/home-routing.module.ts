import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HomePage } from './home.page';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
