import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { ParameterService } from '../parameterService/parameter.service';
import { Observable } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: LocalStorage, private parameterservice: ParameterService) {
    console.log('Hello StorageserviceProvider Provider');
  }

  getAllValuesFromStorage = Observable.create((observer) => {
    let variables = 0;
   
    this.storage.getItem('hcpmAuthenticated').subscribe((data: any) => {
      this.parameterservice.authenticated = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })
    this.storage.getItem('hcpmEmail').subscribe((data: any) => {
      this.parameterservice.email = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })
    this.storage.getItem('hcpmToken').subscribe((data: any) => {
      this.parameterservice.token = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })
    this.storage.getItem('hcpmTokenExpiryDateTime').subscribe((data: any) => {
      this.parameterservice.tokenExpiryDateTime = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })
   
    this.storage.getItem('employee').subscribe((data: any) => {
      this.parameterservice.emp = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })

    this.storage.getItem('hcpmIsManager').subscribe((data: any) => {
      this.parameterservice.isManager = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })

    this.storage.getItem('hcpmErpConfig').subscribe((data: any) => {
      this.parameterservice.erpConfig = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })

    this.storage.getItem('hcpmLoginCredentials').subscribe((data: any) => {
      this.parameterservice.loginCredentials = data;
      observer.next(data);
      variables++;
      if(variables == this.parameterservice.totalStorageVariables) {
        observer.complete();
      }
    })

   
  })

  setLoginCrendentials(loginCred) {
    this.storage.setItem('hcpmLoginCredentials', loginCred);
    this.parameterservice.loginCredentials = loginCred;
  }

  setERPConfig(erpConfig) {
    this.storage.setItem('hcpmErpConfig', erpConfig).subscribe(res=>{});
    this.parameterservice.erpConfig = erpConfig;
  }

  setIsManager(isManager: boolean) {
    this.storage.setItem('hcpmIsManager', isManager).subscribe(res=>{});;
    this.parameterservice.isManager = isManager;
  }

  setAuthenticated(authenticated: boolean) {
    this.storage.setItem('hcpmAuthenticated', authenticated).subscribe(res=>{});;
    this.parameterservice.authenticated = authenticated;
  }

  setEmail(user: string) {
    this.storage.setItem('hcpmEmail', user).subscribe(res=>{});;
    this.parameterservice.email = user;
  }

  setToken(token: string) {
    this.storage.setItem('hcpmToken', token).subscribe(res=>{});;
    this.parameterservice.token = token;
  }

  setTokenExpiryDateTime(tokenExpiryDateTime: Date) {
    this.storage.setItem('hcpmTokenExpiryDateTime', tokenExpiryDateTime).subscribe(res=>{});;
    this.parameterservice.tokenExpiryDateTime = tokenExpiryDateTime;
  }

  setUserDetails(user: any) {
    this.storage.setItem('employee', user).subscribe(res=>{});;
    this.parameterservice.emp = user;
  }

  clearStorage(){
    this.storage.clear();
    if(this.parameterservice.loginCredentials){
      this.setLoginCrendentials(this.parameterservice.loginCredentials);
    }
  }
}
