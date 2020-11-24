import { Component, OnInit } from '@angular/core';
import {Appointments} from '../Service_Class/appointments';
import {AppointmentsService} from '../Service_Class/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointments[];

  constructor(private appointmentsService: AppointmentsService) {
  }

  ngOnInit() {
    this.appointmentsService.findAll().subscribe(data => {
      this.appointments = data;
    });
  }

}
