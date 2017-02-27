import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';

@Component({
    selector:'exams',
    template:`<div>
                <p>Dashboard</p>
            </div>`,
})

export class ExamsComponent implements OnInit {
    // @Input() topbarService: TopbarService;

    ngOnInit() {
        // this.topbarService.pageName = "Dashboard";
        // this.topbarService.navList = new Map<string,string>();
        // this.topbarService.navList.set( "new", "New" );
        // this.topbarService.navList.set( "search", "Search" );
    }
}