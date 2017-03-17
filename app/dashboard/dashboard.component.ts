import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';
import { TopbarComponent } from '../top-bar/topbar.component';

@Component({
    selector:'dashboard',
    template:`<div>
                <p>Dashboard</p>
            </div>`,
})

export class DashboardComponent implements OnInit {
    constructor( @Inject( TopbarService ) private topbarService : TopbarService ) {
    }

    ngOnInit() {
        console.log( "Calling ngOnInit" );
        this.topbarService.pageName = "Dashboard";
        this.topbarService.navList = new Map<string,string>();
        this.topbarService.navList.set( "dashboard/new", "New" );
        this.topbarService.navList.set( "dashboard/search", "Search" );
    }
}