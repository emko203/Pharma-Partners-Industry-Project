import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from './accordion/accordion.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import {HttpClientModule} from '@angular/common/http';
import {AllergiesFormComponent} from './form/allergies-form/allergies-form.component';
import {AppointmentsFormComponent} from './form/appointments-form/appointments-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PatientComponent,
    AllergiesComponent,
    AllergiesFormComponent,
    AppointmentsComponent,
    AppointmentsFormComponent
  ],
    imports: [
        BrowserModule,
        AccordionModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: LoginComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'patient', component: PatientComponent},
            {path: 'patient/{name}', component: PatientComponent},
            {path: 'allergies', component: AllergiesComponent},
            {path: 'addallergies', component: AllergiesFormComponent},
            {path: 'appointments', component: AppointmentsComponent},
            {path: 'addappointments', component: AppointmentsFormComponent}
        ]),
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
