import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';

@Component({
    selector:'exams',
    template:`<div>
                <p>Dashboard</p>
            </div>`,
})

export class ExamsComponent {
    constructor( router: Router, topbarService: TopbarService ){
        topbarService.pageName = "Dashboard";
        topbarService.navList = new Map<string,string>();
        topbarService.navList.set( "new", "New" );
        topbarService.navList.set( "search", "Search" );
    }
}