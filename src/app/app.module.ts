import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IsotopeModule } from 'ngx-isotope';
import { WINDOW_PROVIDERS } from "./window.service";
import { PortfolioPipe } from './portfolio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ServiceComponent,
    ContactusComponent,
    PortfolioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IsotopeModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
