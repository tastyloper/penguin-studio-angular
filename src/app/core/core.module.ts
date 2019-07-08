import { NgModule } from '@angular/core';

import { ToggleService } from './service/toggle.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { AuthGuard } from './guards/auth.guard';
import { PageTitleService } from './service/page-title.service';
import { PortfoliosFilterPipe } from './pipe/portfolios-filter.pipe';
import { PortfolioService } from './service/portfolio.service';

@NgModule({
  declarations: [
    PortfoliosFilterPipe
  ],
  providers: [
    ToggleService,
    AuthService,
    UserService,
    AuthGuard,
    PageTitleService,
    PortfolioService
  ],
  exports: [
    PortfoliosFilterPipe
  ]
})
export class CoreModule {}
