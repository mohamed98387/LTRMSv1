import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { callaborateurs_ExRoutingModule } from "./callaborateurs_Ex-routing.module";
import { UIModule } from "../../shared/ui/ui.module";
import { WidgetModule } from "../../shared/widget/widget.module";
import { NgApexchartsModule } from "ng-apexcharts";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbCollapseModule,
} from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";
import { AgenceListComponent } from "./agence/agence-list/agence-list.component";
import { AddAgenceComponent } from "./agence/add-agence/add-agence.component";
import { EditAgenceComponent } from "./agence/edit-agence/edit-agence.component";
import { AgenceListDirective } from "./agence/agence-list/agence-list.directive";


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ AgenceListComponent,
     AddAgenceComponent,
    EditAgenceComponent,
    AgenceListDirective
 ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    callaborateurs_ExRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    ///
    FormsModule, 
  
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
  ],
})
export class callaborateurs_ExModule {}
