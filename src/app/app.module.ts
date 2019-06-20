import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/* 3rd party modules */
// https://github.com/auth0/angular2-jwt
import { JwtHelper } from 'angular2-jwt';
// https://github.com/ascodix/ngx-isotope
import { IsotopeModule } from 'ngx-isotope';

// Services
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { WINDOW_PROVIDERS } from './services/window.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Pipe
import { PortfolioPipe } from './pipe/portfolio.pipe';

// Component
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ServiceComponent,
    ContactusComponent,
    PortfolioPipe,
    DashboardComponent,
    AdminComponent,
    PortfolioCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    IsotopeModule
  ],
  providers: [ 
    AuthService,
    UserService,
    AuthGuard,
    JwtHelper,
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
