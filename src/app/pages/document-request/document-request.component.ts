import { Component, OnInit } from '@angular/core';
import { DocumentRequestModel } from 'app/models/Document Request/documentRequest.model';
import { ApiService } from 'app/providers/apiService/api.service';
import { ParameterService } from 'app/providers/parameterService/parameter.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentRequestType } from 'app/models/Document Request/documentRequestType.model';
import { DocumentAddressModel } from 'app/models/documentAddress.model';


@Component({
  selector: 'app-document-request',
  templateUrl: './document-request.component.html',
  styleUrls: ['./document-request.component.scss']
})
export class DocumentRequestComponent implements OnInit {
  selectedTab = 'all';

  authenticated: boolean;
  pageType: any;
  documentList: DocumentRequestModel[] = [];
  workerDocumentList: DocumentRequestModel[] = [];
  selectedRequest:DocumentRequestModel = {} as DocumentRequestModel;
  closeResult: string;
  docRequestTypeList: DocumentRequestType[] = [];
  docReqAddressTypeList: DocumentAddressModel[] = [];

  constructor(public apiService: ApiService,
    public paramService: ParameterService,private modalService: NgbModal) { }

    open(content,workerDocument:DocumentRequestModel) {
      this.selectedRequest = workerDocument;
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
    this.GetMyWorkersDocRequest();
    this.getRequestType();
  }

  async GetMyWorkersDocRequest(){ 
 

    this.apiService.GetMyWorkersDocRequest(this.paramService.emp.WorkerId).subscribe(res => {     
      this.workerDocumentList = res;
      console.log(res);

    }, error => {
      alert("Connection Error");
     
    })
  }

  getRequestType() {
    this.apiService.getDocRequestType().subscribe(res => {
      this.docRequestTypeList = res;
    }, error => {
      console.log(error)
    })

    this.apiService.getDocumentRequestAddress().subscribe(res => {
      this.docReqAddressTypeList = res;
    }, error => {
      console.log(error)
    })
  }


}
