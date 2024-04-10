import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPouchComponent } from './pages/web-pouch/web-pouch/web-pouch.component';
import { SalesCockpitComponent } from './pages/web-pouch/sales-cockpit/sales-cockpit.component';
import { NfsIntegrationComponent } from './pages/web-pouch/nfs-integration/nfs-integration.component';
import { CalculationGuidesComponent } from './pages/web-pouch/calculation-guides/calculation-guides.component';
import { ConpareSpedComponent } from './pages/web-pouch/conpare-sped/conpare-sped.component';
import { AuditDocumentsComponent } from './pages/audit/audit-documents/audit-documents.component';
import { ResetParticipantActivityComponent } from './pages/audit/reset-participant-activity/reset-participant-activity.component';
import { DefineScenarioComponent } from './pages/audit/define-scenario/define-scenario.component';
import { RelateIssuerProductComponent } from './pages/audit/relate-issuer-product/relate-issuer-product.component';
import { ProductReviewComponent } from './pages/review/product-review/product-review.component';
import { NationalSimpleSegregationComponent } from './pages/segregation/national-simple-segregation/national-simple-segregation.component';
import { EmissionPgdasComponent } from './pages/segregation/emission-pgdas/emission-pgdas.component';
import { OperationsSimulatorComponent } from './pages/product-consultation/operations-simulator/operations-simulator.component';
import { NationalSimpleRecoveryComponent } from './pages/recovery/national-simple-recovery/national-simple-recovery.component';
import { SituationViewComponent } from './pages/web-pouch/situation-view/situation-view.component';
import { FreeProductConsultationComponent } from './pages/product-consultation/free-product-consultation/free-product-consultation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'web-pouch'
  },
  { path: 'web-pouch', component: WebPouchComponent },
  { path: 'situationl-view', component: SituationViewComponent },
  { path: 'sales-cockpit', component: SalesCockpitComponent },
  { path: 'nfs-integration', component: NfsIntegrationComponent },
  { path: 'calculation-guides', component: CalculationGuidesComponent },
  { path: 'conpare-sped', component: ConpareSpedComponent },
  { path: 'audit-documents', component: AuditDocumentsComponent },
  { path: 'reset-participant-activity', component: ResetParticipantActivityComponent },
  { path: 'product-review', component: ProductReviewComponent },
  { path: 'national-simple-segregation', component: NationalSimpleSegregationComponent },
  { path: 'emission-pgdas', component: EmissionPgdasComponent },
  { path: 'operations-simulator', component: OperationsSimulatorComponent },
  { path: 'free-product-consultation', component: FreeProductConsultationComponent },
  { path: 'define-scenario', component: DefineScenarioComponent },
  { path: 'relate-issuer-product', component: RelateIssuerProductComponent },
  { path: 'national-simple-recovery', component: NationalSimpleRecoveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
