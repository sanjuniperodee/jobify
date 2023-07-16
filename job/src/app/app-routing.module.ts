import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about us/about.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './shared/jobh/job.component';
import { GetjComponent } from './get job/getj.component';
import { OfferComponent } from './vacansis/offer.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path:'about', component: AboutComponent},
      { path:'job', component: GetjComponent},
      { path: 'offer', component: OfferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
