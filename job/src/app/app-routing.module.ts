import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about us/about.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './shared/jobh/job.component';
import { GetjComponent } from './get job/getj.component';
import { OfferComponent } from './vacansis/offer.component';
import { RegistrationComponent } from './artist registration/registration';
import { CreatingComponent } from './creating an application/creating.component';
import { ZakazComponent } from './zakaz/zakaz.component';
import { ZakazTwoComponent } from './zakaz2/zakazTwo.component';
import { ProfileComponent } from './profile/profile.component';
import { PochtaComponent } from './regestr pochta/pochta.component';
import { LayuotComponent } from './layuot ispolnitel/layuot.component';
import { ZakazLayuoComponent } from './layuot zakaz/zakazlayuot.component';
import { BalansComponent } from './balans/balans.component';
import { AnketaComponent } from './anketa/anketa.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path:'about', component: AboutComponent},
      { path:'job', component: GetjComponent},
      { path: 'offer', component: OfferComponent },
      {path:'registration', component: RegistrationComponent},
      {path:'zakaz', component:ZakazComponent},
      {path:'zakaz2', component:ZakazTwoComponent},
      // {path:'profile',component:ProfileComponent},
      {path:'reg', component:PochtaComponent},
      {path:'layuot', component:LayuotComponent},
      {path:'chat',component:ZakazLayuoComponent},
      {path:'balans',component:BalansComponent},
      {path:'anketa',component:AnketaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
