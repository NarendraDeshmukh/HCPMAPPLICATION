import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/providers/storageService/storage.service';
import { Router } from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: './dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: './icons', title: 'Icons', icon: 'nc-diamond', class: '' },
    { path: './notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
    { path: './user', title: 'User Profile', icon: 'nc-single-02', class: '' },
    { path: './leave-home', title: 'Leave', icon: 'nc-diamond', class: '' },
    { path: './document-request', title: 'HR Request', icon: 'nc-tile-56', class: '' },
    { path: './table', title: 'Table List', icon: 'nc-tile-56', class: '' }, 
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(public storageServ:StorageService,public router:Router) {

    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    logout() {
        if(confirm("Are you sue you want to logout?")){
            this.storageServ.clearStorage();
            this.router.navigateByUrl("login")
        }
    }
}
