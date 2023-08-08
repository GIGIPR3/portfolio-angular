import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChisonoComponent } from './chisono/chisono.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContattamiComponent } from './contattami/contattami.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChisonoComponent,
    PortfolioComponent,
    ContattamiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
