import { LeaveAppLineContract } from './leaveAppLineContract.interface';

export class LeaveAppTableContract{    
    Number:any;
    WorkerId :any;
    WorkerName:any;
    LeaveApplicationCode:any;
    Email:any
    Status:any;
    Remarks:any
    Resumed:any
    WorkflowRemarks:any;
    PeriodFrom:any;
    ResumptionInitiated:any;
    PeriodTo:any;
    Approved:boolean;
    Rejected:boolean;
    ApproveWorker: any;
    RejectWorker: any;
    ErrorMessage:any;
    Error:any;

    LeaveApplicationLine:LeaveAppLineContract[];

    IsDeleted:boolean;
    IsEditable:boolean;
    InApprovalState:boolean;
}
