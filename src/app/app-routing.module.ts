import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/app.chart';
import { ContainerComponent } from './container/container.component';
import { ButtonComponent } from './button/button.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: 'button', component: ButtonComponent},
  // {path: 'chart', component: ChartComponent},
  // {path: 'home', component: HomeComponent},
  {path: 'checkcontainer', component: ContainerComponent},
  // {path: 'container1', component: ButtonComponent},
  {path: 'checkcontainer', component: ContainerComponent},
  {path: 'checkroute', component: MapComponent},
  {path: 'graph', component: HomeComponent},
  {path: '**', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
