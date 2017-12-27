import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component'
import {HomeComponent} from './components/home/home.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'

const appRoutes: Routes = [
  { path: 'home', 
  component: HomeComponent },
  {
    path: 'dashboard',
    component:DashboardComponent
  }
 // { path: 'heroes', component: HeroListComponent },
];



@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
  })
  export class AppRoutingModule { }
  