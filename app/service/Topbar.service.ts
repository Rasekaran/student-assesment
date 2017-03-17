import {Injectable} from '@angular/core';
@Injectable()
export class TopbarService{
    public pageName : string;
    public navList : Map<string,string>;
    constructor(){
        this.pageName = "Loading...";
        this.navList = new Map<string, string>();
    }
}