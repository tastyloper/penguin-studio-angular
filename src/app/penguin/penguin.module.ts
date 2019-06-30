import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* 3rd party modules */
// https://www.npmjs.com/package/ngx-infinite-scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { PenguinRoutingModule } from './penguin-routing.module';

import { PenguinComponent } from './penguin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    PenguinComponent,
    PortfolioComponent,
    PortfolioCreateComponent,
    ServiceComponent,
    ContactusComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PenguinRoutingModule,
    CoreModule,
    SharedModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PenguinComponent,
    PortfolioComponent,
    PortfolioCreateComponent,
    ServiceComponent,
    ContactusComponent,
    AdminComponent,
    DashboardComponent
  ]
})
export class PenguinModule {}
