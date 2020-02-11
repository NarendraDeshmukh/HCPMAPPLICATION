import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'app/models/login.model';
import { ApiService } from 'app/providers/apiService/api.service';
import { ParameterService } from 'app/providers/parameterService/parameter.service';


import { Router } from '@angular/router';
import { StorageService } from 'app/providers/storageService/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginModel: LoginModel = {} as LoginModel;

  showPassword: boolean;
  loginSpinner: boolean
  savePass: boolean;
  constructor(public ApiService: ApiService, public router: Router, public paramService: ParameterService, public storageServ: StorageService) { }

  ngOnInit() {
    
  }

  login() {
    this.ApiService.userLogin(this.loginModel).subscribe(res => {
      console.log(res)
      this.loginSpinner = false;
      this.storageServ.setAuthenticated(true);
      this.storageServ.setUserDetails(res);
      this.storageServ.setEmail(this.loginModel.Id);
      if (res) {
        this.router.navigateByUrl("dashboard");
      }else{
        alert("Invalid Data");
      }
    }, error => {
      this.loginSpinner = false;
      console.log(error);
    })
  }
}
