import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChisonoComponent } from './chisono/chisono.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'chisono', component: ChisonoComponent},
  {path:'portfolio', component: PortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
