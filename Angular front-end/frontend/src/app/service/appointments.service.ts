import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointments} from '../model/appointments';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private appointmentUrl: string;
  private appointmentUrl1: string;
  constructor(private http: HttpClient) {
    this.appointmentUrl = 'http://localhost:8080/appointments/all';
    this.appointmentUrl1 = 'http://localhost:8080/appointments/patient/';
  }

  public findAll(): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(this.appointmentUrl);
  }
  public findAppointmentwithId1(id: Number):Observable<Appointments[]>{

    if(id){
      this.appointmentUrl1 = this.appointmentUrl1+id;
      console.log(this.appointmentUrl1);
    }
    return this.http.get<Appointments[]>(`${this.appointmentUrl1}`);
  }
  public save(appointments: Appointments) {
    return this.http.post<Appointments>(this.appointmentUrl, appointments);
  }
}
