import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent
  ]
})
export class SharedModule {}
