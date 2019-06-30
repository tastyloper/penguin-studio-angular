import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';

import { PenguinComponent } from './penguin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: PenguinComponent, children: [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent }
  ] },
  { path: '', component: PenguinComponent, children: [
    { path: 'portfolioCreate', component: PortfolioCreateComponent }
  ] },
  { path: '', component: PenguinComponent, children: [
    { path: 'service', component: ServiceComponent }
  ] },
  { path: '', component: PenguinComponent, children: [
    { path: 'contactus', component: ContactusComponent }
  ] },
  { path: '', component: PenguinComponent, children: [
    { path: 'admin', component: AdminComponent }
  ] },
  { path: '', component: PenguinComponent, children: [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenguinRoutingModule {}
