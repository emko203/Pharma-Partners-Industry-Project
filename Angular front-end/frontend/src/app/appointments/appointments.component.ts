import { Component, OnInit } from '@angular/core';
import {Appointments} from '../model/appointments';
import {AppointmentsService} from '../service/appointments.service';


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
