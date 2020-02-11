import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { LeaveHomeComponent } from './pages/leave-home/leave-home.component';
import { LeaveHomeElementComponent } from './pages/leave-home/leave-home-element/leave-home-element.component';
import { DocumentRequestComponent } from './pages/document-request/document-request.component';
import { LeaveAddComponent } from './pages/leave-add/leave-add.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    LeaveAddComponent,
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    FormsModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule
  ],
  providers: [
    LocalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
