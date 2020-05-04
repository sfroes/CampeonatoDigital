import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { CampeonatoInsertComponent } from './component/campeonato/campeonato-insert/campeonato-insert.component';
import { CampeonatoListComponent } from './component/campeonato/campeonato-list/campeonato-list.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CampeonatoInsertComponent,
    CampeonatoListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
