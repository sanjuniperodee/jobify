import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about us/about.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './shared/jobh/job.component';
import { GetjComponent } from './get job/getj.component';
import { OfferComponent } from './vacansis/offer.component';
import { RegistrationComponent } from './artist registration/registration';
import { CreatingComponent } from './creating an application/creating.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path:'about', component: AboutComponent},
      { path:'job', component: GetjComponent},
      { path: 'offer', component: OfferComponent },
      {path:'registration', component: RegistrationComponent},
      {path:'creating', component:CreatingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
