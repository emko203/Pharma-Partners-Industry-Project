import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { AccordionModule } from './accordion/accordion.module';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './form/patient-form/patient-form.component';
import { LabResultsListComponent } from './lab-results-list/lab-results-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DiseasesListComponent } from './diseases-list/diseases-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientPageComponent,
    LoginComponent,
    PatientComponent,
    PatientListComponent,
    PatientFormComponent,
    LabResultsListComponent,
    DiseasesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    AccordionModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'patient', component: PatientPageComponent},
      {path: 'patient/{name}', component: PatientPageComponent},
      {path: 'patients', component: PatientListComponent},
      {path: 'labResults', component: LabResultsListComponent}

    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
