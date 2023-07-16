import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule} from './shared/shared.module';
import { AboutComponent } from './about us/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { GetjComponent } from './get job/getj.component';
import { OfferComponent } from './vacansis/offer.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GetjComponent,
    OfferComponent
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
