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
import { PochtaComponent } from './regestr pochta/pochta.component';
import { IspolnitelComponent } from './registr-ispolnitel/ispolnitel.component';
import { HttpClientModule } from '@angular/common/http';
import { ZakazLayuoComponent } from './layuot zakaz/zakazlayuot.component';
import { LayuotComponent } from './layuot ispolnitel/layuot.component';
import { BalansComponent } from './balans/balans.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';





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
    ProfileComponent,
    PochtaComponent,
    IspolnitelComponent,
    ZakazLayuoComponent,
    LayuotComponent,
    BalansComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
