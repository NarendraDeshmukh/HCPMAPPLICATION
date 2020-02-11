import { Component } from '@angular/core';
import { StorageService } from './providers/storageService/storage.service';
import { ParameterService } from './providers/parameterService/parameter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private storageServ: StorageService,public paramServ:ParameterService,public router:Router) {
    this.getDatafromStorage()
  }

  getDatafromStorage() {
    this.storageServ.getAllValuesFromStorage.subscribe(res => { }, error => { },
      () => {
        if(this.paramServ.authenticated){
          this.router.navigateByUrl("dashboard")
        }else{
          this.router.navigateByUrl("login")
        }
      }
    )
  }
}
