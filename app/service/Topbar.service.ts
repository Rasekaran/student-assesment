import {Injectable} from '@angular/core';
@Injectable()
export class TopbarService{
    constructor( public pageName: string, public navList: Map<string, string> ){
        this.pageName = "Loading...";
        this.navList = new Map<string, string>();
    }
}