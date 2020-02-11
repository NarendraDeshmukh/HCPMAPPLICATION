import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginModel } from 'app/models/login.model';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //public baseAddress: string = "https://ofm-devdevaos.sandbox.ax.dynamics.com";

  //AFZ ENV
  public baseAddress = "https://hcpmwebapi.azurewebsites.net/";

  //OFM ENV
  //public baseAddress= "https://hcpmapiofmuat.azurewebsites.net/";
 // public azureId = "https://ofm-devdevaos.sandbox.ax.dynamics.com";

  constructor(public http: HttpClient) {
    
   }
   validateToken$ = new Observable((observer) => {
    observer.next("completed");
    observer.complete();
  });

  userLogin(login : LoginModel){
    let url = this.baseAddress + "api/HCPM/Login";
    let body = { 
      "Id":login.Id,
      "Password":login.Password
     };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json'
      })
    };
    console.log(JSON.stringify(body))
    return this.http.post(url, body, httpOptions);
  }
  getWorkerDetails(user: string): Observable<any> {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/GetWorker";
        let body = { email: user };
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        service = this.http.post(url, body, httpOptions);
      }
    );
    return service;
  }
  getLeaveType(email, absDate = new Date()): Observable<any> {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/GetWorkerAbsenceBalance";
        let body = {
          "WorkerId": email,
          "AbsenceCode": "",
          "AbsenceDate": absDate
        };
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        service = this.http.post(url, body, httpOptions);
      }
    );
    return service;
  }
  GetMyWorkersLeaveApprovals(empid): Observable<any> {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/GetLeaveApplicationApproval";
        let body = {
          "ApprovalId": empid
        }
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        service = this.http.post(url, JSON.stringify(body), httpOptions);

      }
    );
    return service;
  }
  getLeaveDetails(email): Observable<any> {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/GetLeaveApplication";
        let body = { WorkerId: email };
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        service = this.http.post(url, body, httpOptions);

      }
    );
    return service;
  }
  updateEmplLeaveAppl(contract): Observable<any> {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/UpdateLeaveApplication";
        let body = JSON.stringify(contract);
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        service = this.http.post(url, body, httpOptions);

      }
    );
    return service;


  }
  
  GetMyWorkersDocRequest(workerId) {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/GetHrRequestApproval";
        let body = {
          "ApprovalId": workerId
        }
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        console.log(JSON.stringify(body))
        service = this.http.post(url, JSON.stringify(body), httpOptions);
      }
    );
    return service;
  }
  getDocRequestType(): Observable<any> {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/GetHrRequestType";
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        service = this.http.get(url);

      }
    );
    return service;
  }

  getDocumentRequestAddress(): Observable<any> {
    var service;
    this.validateToken$.subscribe(res => { }, error => { },
      () => {
        let url = this.baseAddress + "api/HCPM/GetHrRequestAddress";
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'Application/json'
          })
        };
        service = this.http.get(url);

      }
    );
    return service;
  }

}
