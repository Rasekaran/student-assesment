import { Component } from '@angular/core';
import { TopbarService } from './service/Topbar.service';

@Component({
  selector: 'my-app',
  providers:[TopbarService],
  template: `
            <div id="wrapper">

              <!-- Sidebar -->
              <side-bar></side-bar>
              <!-- /#sidebar-wrapper -->

              <!-- Page Content -->
              <top-bar></top-bar>
              <div id="page-content-wrapper">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-lg-12">
                              <!-- Router Outlet -->
                              <router-outlet >
                              </router-outlet>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- /#page-content-wrapper -->

          </div>
            `
})
export class AppComponent  {//[topbarService] = "topbarService"
    // topbarService: TopbarService;
}
