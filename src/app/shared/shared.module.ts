import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { JobComponent } from './jobh/job.component';
import { InstructionComponent } from './instruction/instruction.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { BodyHeaderComponent } from '../bodyheader/bodyheader.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    JobComponent,
    InstructionComponent,
    InfoComponent,
    FooterComponent,
    HomeComponent,
    BodyHeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
