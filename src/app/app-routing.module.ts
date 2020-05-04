import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampeonatoInsertComponent } from './component/campeonato/campeonato-insert/campeonato-insert.component';
import { CampeonatoListComponent } from './component/campeonato/campeonato-list/campeonato-list.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: "campeonato/insert",
    component: CampeonatoInsertComponent
  },
  { 
    path: 'campeonato/list',
    component: CampeonatoListComponent
  },
  { 
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
