import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { AccordionModule } from './accordion/accordion.module';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { MedicinePrescriptionComponent } from './medicine-prescription/medicine-prescription.component';
import { NotesComponent } from './notes/notes.component';
import { LabResultsListComponent } from './lab-results-list/lab-results-list.component';

import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './form/patient-form/patient-form.component';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';

import { AllergiesComponent } from './allergies/allergies.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AllergiesFormComponent } from './Forms/allergies-form/allergies-form.component';
import { AppointmentsFormComponent } from './Forms/appointments-form/appointments-form.component';
import { DiseasesListComponent } from './diseases-list/diseases-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientPageComponent,
    LoginComponent,
    PatientComponent,
    MedicinePrescriptionComponent,
    NotesComponent,
    DiseasesListComponent,
    PatientFormComponent,
    LabResultsListComponent,
    AllergiesComponent,
    VaccineListComponent
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
            {path: 'allergies', component: AllergiesComponent},
            {path: 'addallergies', component: AllergiesFormComponent},
            {path: 'appointments', component: AppointmentsComponent},
            {path: 'addappointments', component: AppointmentsFormComponent},
            {path: 'patient/{name}', component: PatientPageComponent},
            {path: 'patients', component: PatientListComponent},
            {path: 'labResults', component: LabResultsListComponent},
            {path: 'vaccine/{id}', component: VaccineListComponent}
        ]),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
