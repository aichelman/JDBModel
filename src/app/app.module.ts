import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router'

const appRoutes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'team', component: TeamComponent},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
