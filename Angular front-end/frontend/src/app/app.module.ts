import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from './accordion/accordion.module';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';


import { LabResultsListComponent } from './lab-results-list/lab-results-list.component';

import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './form/patient-form/patient-form.component';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';

import { AllergiesComponent } from './allergies/allergies.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DiseasesListComponent } from './diseases-list/diseases-list.component';
import { AllergiesFormComponent } from './form/allergies-form/allergies-form.component';
import { AppointmentsFormComponent} from './form/appointments-form/appointments-form.component';
import {NotesComponent} from './notes/notes.component';
import {MedicinePrescriptionComponent} from './medicine-prescription/medicine-prescription.component';
import { GeneralInformationComponent } from './general-information/general-information.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PatientComponent,
    MedicinePrescriptionComponent,
    NotesComponent,
    DiseasesListComponent,
    PatientFormComponent,
    LabResultsListComponent,
    AllergiesComponent,
    VaccineListComponent,
    AllergiesFormComponent,
    AppointmentsFormComponent,
    AppointmentsComponent,
    GeneralInformationComponent
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
            {path: 'patient/:id', component: PatientComponent},
            {path: 'allergies', component: AllergiesComponent},
            {path: 'addallergies', component: AllergiesFormComponent},
            {path: 'appointments', component: AppointmentsComponent},
            {path: 'addappointments', component: AppointmentsFormComponent},
            {path: 'patient/{name}', component: PatientComponent},
            {path: 'patients', component: PatientListComponent},
            {path: 'labResults', component: LabResultsListComponent},
            {path: 'vaccine/:id', component: VaccineListComponent},
            {path: 'patient', component: GeneralInformationComponent}
        ]),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
