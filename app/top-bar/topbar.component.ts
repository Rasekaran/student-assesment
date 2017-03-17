import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../service/Topbar.service';

@Component({
    selector:'top-bar',
    template:`<div id="top-bar">
                <div>{{topbarService.pageName}}</div>
              </div>
              <div id="top-bar-nav">
                <div *ngFor="let key of topbarService.navList.keys()" class="tab">
                    <a href="./{{key}}"> {{topbarService.navList.get( key )}}</a>
                </div>
              </div>`,
})

export class TopbarComponent {
    constructor( @Inject( TopbarService ) private topbarService : TopbarService ){
    }
}