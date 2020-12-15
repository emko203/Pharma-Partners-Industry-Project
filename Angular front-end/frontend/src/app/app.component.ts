import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor(private authService: AuthService) {
    this.title = 'Pharmapartners Application';


  }

  logout(){
    this.authService.logout();
  }
}
