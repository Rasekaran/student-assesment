import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SidebarComponent }  from './side-bar/sidebar.component';
import { TopbarComponent }  from './top-bar/topbar.component';
import { TopbarNavComponent }  from './top-bar/topbar-nav.component';
import { routing } from './app.routers';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamsComponent } from './exams/exams.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule, routing ],
  declarations: [ AppComponent, SidebarComponent, TopbarComponent, TopbarNavComponent, DashboardComponent, ExamsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
