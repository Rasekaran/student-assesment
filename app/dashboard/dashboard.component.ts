import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';

@Component({
    selector:'dashboard',
    providers:[TopbarService],
    template:`<div>
                <p>Dashboard</p>
            </div>`,
})

export class DashboardComponent implements OnInit {
    // @Input() topbarService: TopbarService;

    ngOnInit() {
        // this.topbarService.pageName = "Dashboard";
        // this.topbarService.navList = new Map<string,string>();
        // this.topbarService.navList.set( "new", "New" );
        // this.topbarService.navList.set( "search", "Search" );
    }
}