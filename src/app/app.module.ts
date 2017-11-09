import { PublisherService } from './publisher.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PublisherComponent } from './publisher/publisher.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PublisherComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UserService , AuthService, PublisherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
