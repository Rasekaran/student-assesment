import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';

@Component({
    selector:'top-bar',
    providers:[TopbarService],
    template:`<div id="top-bar">
                <div>{{pageName}}</div>
              </div>
              <div id="top-bar-nav">
                <div *ngFor="let key of topbarService.navList.keys()" class="tab">
                    <a href="/key"> {{topbarService.navList.get( key )}}</a>
                </div>
              </div>`,
})

export class TopbarComponent {

    constructor( router: Router, topbarService: TopbarService ) {
    }
}