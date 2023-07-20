import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule} from './shared/shared.module';
import { AboutComponent } from './about us/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { GetjComponent } from './get job/getj.component';
import { OfferComponent } from './vacansis/offer.component';
import { CreatingComponent } from './creating an application/creating.component';
import { ZakazComponent } from './zakaz/zakaz.component';
import { RegistrationComponent } from './artist registration/registration';
import { ZakazTwoComponent } from './zakaz2/zakazTwo.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GetjComponent,
    OfferComponent,
    CreatingComponent,
    ZakazComponent,
    RegistrationComponent,
    ZakazTwoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
