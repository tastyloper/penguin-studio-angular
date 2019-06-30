import { NgModule } from '@angular/core';

import { PortfolioPipe } from './pipe/portfolio.pipe';

import { ToggleService } from './service/toggle.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { WINDOW_PROVIDERS } from './service/window.service';
import { AuthGuard } from './guards/auth.guard';
import { PageTitleService } from './service/page-title.service';


@NgModule({
  declarations: [
    PortfolioPipe
  ],
  providers: [
    ToggleService,
    AuthService,
    UserService,
    WINDOW_PROVIDERS,
    AuthGuard,
    PageTitleService
  ]
})
export class CoreModule {}
