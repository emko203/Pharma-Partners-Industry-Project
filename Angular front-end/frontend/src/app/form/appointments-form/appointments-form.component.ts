import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Appointments} from '../../model/appointments';
import {AppointmentsService} from '../../service/appointments.service';

@Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.css']
})
export class AppointmentsFormComponent implements OnInit {

  appointments: Appointments;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentsService: AppointmentsService) {
    this.appointments = new Appointments();
  }

  onSubmit() {
    this.appointmentsService.save(this.appointments).subscribe(result => this.gotoAppointmentsList());
  }

  gotoAppointmentsList() {
    this.router.navigate(['/appointments']);
  }

  ngOnInit(): void {
  }

}
