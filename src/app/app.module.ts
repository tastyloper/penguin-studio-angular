import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* 3rd party modules */
// https://github.com/auth0/angular2-jwt
import { JwtHelper } from 'angular2-jwt';
// https://www.npmjs.com/package/ngx-infinite-scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

/* Component */
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';

/* Module */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ServiceComponent,
    ContactusComponent,
    DashboardComponent,
    AdminComponent,
    PortfolioCreateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
