import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private leaveLineAddDetails = new BehaviorSubject<any>(0);
  private leaveList = new BehaviorSubject<any>(0);
  getLeaveLineAddDetails$ = this.leaveLineAddDetails.asObservable();
  
  constructor() { }

  setLeaveLineAddDetails(data) {
    this.leaveLineAddDetails.next(data);
  }
  setLeaveList(data) {
    this.leaveList.next(data);
  }
}
