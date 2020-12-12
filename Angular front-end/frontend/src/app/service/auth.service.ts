import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {shareReplay,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ROOT_URL;

  constructor(private http:HttpClient,private router:Router) { 
    this.ROOT_URL="http://localhost:8080";
  }

  login(username:string,password:string){
    const headers=new HttpHeaders({Authorizaton:"Basic "+btoa(username+":"+password)})
    return this.http.get(`${this.ROOT_URL}/login`,{headers,observe:'response'}).pipe(
       shareReplay(),
       tap((res:HttpResponse<any>)=>{
         if(res.status!=401 && res.status!=403){
          this.setSession(username,password);
           this.router.navigateByUrl("/dashboard");
         }
       })
     );
  }
  logout(){    
    this.removeSession();
    this.router.navigateByUrl("/");
  }
  getAuthToken(){
   return sessionStorage.getItem('AUTH_TOKEN');
  }
   private setSession(username:string,password:string){
     sessionStorage.setItem('AUTH_TOKEN',btoa(username+":"+password));
   }
   private removeSession(){
    sessionStorage.removeItem("AUTH_TOKEN");
    
  }
}
