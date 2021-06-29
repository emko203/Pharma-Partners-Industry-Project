import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointments} from '../model/appointments';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private appointmentUrl: string;

  constructor(private http: HttpClient) {
    this.appointmentUrl = 'http://localhost:8080/appointments/all';
  }

  public findAll(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.appointmentUrl);
  }

  public save(appointments: Appointments) {
    return this.http.post<Appointments>(this.appointmentUrl, appointments);
  }
}
