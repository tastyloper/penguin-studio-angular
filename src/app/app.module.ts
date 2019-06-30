/* Core */
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* 3rd party modules */
// https://github.com/auth0/angular2-jwt
import { JwtHelper } from 'angular2-jwt';

/* Component */
import { AppComponent } from './app.component';

/* Module */
import { SharedModule } from './shared/shared.module';
import { PenguinModule } from './penguin/penguin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    PenguinModule
  ],
  providers: [
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
