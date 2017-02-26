import { Component } from '@angular/core';

@Component({
    selector:'side-bar',
    template:`<div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li *ngFor="let menu of menus">
                        <a [routerLink]="['/dashboard']">{{menu}}</a>
                    </li>
                </ul>
            </div>`,
})

export class SidebarComponent {
    menus = [ "dashboard", "exams", "students", "Staff", "Classrooms", "Reports" ];
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