import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgenceListComponent } from "./agence/agence-list/agence-list.component";
import { ChauffeurListComponent } from "./chauffeur/chauffeur-list/chauffeur-list.component";
import { VehiculeListComponent } from "./vehicule/vehicule-list/vehicule-list.component";

const routes: Routes = [
  {
    path: "agence",
    component: AgenceListComponent,
    
  },
  {
    path: "chauffeur",
    component: ChauffeurListComponent,
    
  },
  {
    path: "vehicule",
    component: VehiculeListComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class callaborateurs_ExRoutingModule {}
