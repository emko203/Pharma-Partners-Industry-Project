import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Appointments } from '../model/appointments';

import { AppointmentsService } from '../service/appointments.service';

@Component({
  selector: 'app-appointment-patient1',
  templateUrl: './appointment-patient1.component.html',
  styleUrls: ['./appointment-patient1.component.css']
})
export class AppointmentPatient1Component implements OnInit {
  appointments: Appointments[]=[];
  private patientID: Number;
  constructor(private appointmentsService:AppointmentsService) { }

  ngOnInit(): void {
    this.appointmentsService.findAppointmentwithId1(this.patientID).subscribe(data => {
      this.appointments = data;
    });
  }
}
