import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LayuotComponent } from "./layuot.component";





const routes: Routes = [
    {
        path: "layuot",
        component: LayuotComponent,
    },
];

@NgModule({
    declarations: [LayuotComponent,],
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [LayuotComponent],
})
export class LayuotModule {}