import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';

@Component({
    selector:'exams',
    template:`<div>
                <p>Exams</p>
            </div>`,
})

export class ExamsComponent implements OnInit {
    constructor( @Inject( TopbarService ) private topbarService : TopbarService ) {
    }

    ngOnInit() {
        this.topbarService.pageName = "Exams";
        this.topbarService.navList = new Map<string,string>();
        this.topbarService.navList.set( "exams/new", "New" );
        this.topbarService.navList.set( "exams/search", "Search" );
    }
}