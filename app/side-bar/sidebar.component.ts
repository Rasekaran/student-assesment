import { Component } from '@angular/core';

@Component({
    selector:'side-bar',
    template:`<div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li *ngFor="let menu of menus.keys()">
                        <a href="/{{menu}}">{{menus.get( menu )}}</a>
                    </li>
                </ul>
            </div>`,
})

export class SidebarComponent {
    private menus: Map<string, string>;
    constructor() {
        this.menus = new Map<string, string>();
        this.menus.set( "dashboard", "Dashboard" );
        this.menus.set( "exams", "Exams" );
        this.menus.set( "students/new", "Students" );
        this.menus.set( "staff/new", "Staff" );
        this.menus.set( "classroom/new", "Classroom" );
        this.menus.set( "reports/new", "Reports" );
    }
    // menus.se
    // [ "dashboard", "exams", "students", "Staff", "Classrooms", "Reports" ];
}

// @Component({
//     selector:'side-bar',
//     template:`<div id="sidebar-wrapper">
//                 <ul class="sidebar-nav">
//                     <li *ngFor="let menu of menus">
//                         <a>{{menus[ menu ]}}</a>
//                     </li>
//                 </ul>
//             </div>`,
// })

// export class SidebarComponent {
//     menus = { 'dashboard' : 'Dashboard', 'exams':'Exams' };
// }