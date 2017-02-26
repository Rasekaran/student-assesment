import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';

@Component({
    selector:'dashboard',
    template:`<div>
                <p>Dashboard</p>
            </div>`,
})

export class DashboardComponent {

    constructor( router: Router, topbarService: TopbarService ){
        topbarService.pageName = "Dashboard";
        topbarService.navList = new Map<string,string>();
        topbarService.navList.set( "default", "Default" );
        topbarService.navList.set( "custom", "Custom" );
    }
}