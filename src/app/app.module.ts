import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component'
import { HttpClientModule } from '@angular/common/http';
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
import { WebPouchComponent } from './pages/web-pouch/web-pouch/web-pouch.component';
import { RouterModule } from '@angular/router';
import { SituationViewComponent } from './pages/web-pouch/situation-view/situation-view.component';
import { FreeProductConsultationComponent } from './pages/product-consultation/free-product-consultation/free-product-consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    SalesCockpitComponent,
    NfsIntegrationComponent,
    CalculationGuidesComponent,
    ConpareSpedComponent,
    AuditDocumentsComponent,
    ResetParticipantActivityComponent,
    DefineScenarioComponent,
    RelateIssuerProductComponent,
    ProductReviewComponent,
    NationalSimpleSegregationComponent,
    EmissionPgdasComponent,
    OperationsSimulatorComponent,
    NationalSimpleRecoveryComponent,
    WebPouchComponent,
    SituationViewComponent,
    FreeProductConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
