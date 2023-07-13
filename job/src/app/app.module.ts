import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule} from './shared/shared.module';
import { AboutComponent } from './about us/about.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  
  ],
  exports:[],
 
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
