import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/providers/apiService/api.service';
import { LeaveAppTableContract } from 'app/models/leave/leaveAppTableContact.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/providers/dataService/data.service';
import { ParameterService } from 'app/providers/parameterService/parameter.service';
import { StorageService } from 'app/providers/storageService/storage.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leave-home',
  templateUrl: './leave-home.component.html',
  styleUrls: ['./leave-home.component.scss']
})
export class LeaveHomeComponent implements OnInit {

  selectedTab = 'all';
  leaveAppList: LeaveAppTableContract[];
  selectedLeave:LeaveAppTableContract = {} as LeaveAppTableContract;

  authenticated: boolean;
  pageType: any;
  closeResult: string;
  workerLeaveList: LeaveAppTableContract[];

  constructor(public apiService: ApiService, public router: Router, public dataService: DataService,
    public paramService: ParameterService, public storageServ: StorageService,
    private activateRoute: ActivatedRoute, private modalService: NgbModal) { }


  open(content,leave:LeaveAppTableContract) {
    this.selectedLeave = leave;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',size:'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.getLeaveDetails();
  }

  async myWorkersLeave() {

    this.apiService.GetMyWorkersLeaveApprovals(this.paramService.emp.WorkerId).subscribe(res => {

      this.workerLeaveList = res;
      console.log(this.workerLeaveList);
    }, error => {

      alert("Connection Error");
    })
  }

  async getLeaveDetails() {


    this.apiService.getLeaveDetails(this.paramService.emp.WorkerId).subscribe(res => {
      this.dataService.setLeaveList(res);
      this.leaveAppList = res;
      console.log(res);
    }, error => {
      alert("Connection Error");
    })
  }

  selectedLeaveItem(leave:LeaveAppTableContract){
    this.selectedLeave = leave;
  }
}
