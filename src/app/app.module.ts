import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { ViewchildService } from './queryselect/viewchild.service';
import { PublisherService } from './publisher.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PublisherComponent } from './publisher/publisher.component';
import { ParentComponent } from './queryselect/parent/parent.component';

import { ChildComponent } from './queryselect/parent/child/child.component';
import { SearchComponent } from './search/search/search.component';
import { LOGO_URL } from './global';
import { TestGlobalComponent } from './test-global/test-global.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PublisherComponent,
    ChildComponent,
    ParentComponent,
    SearchComponent,
    TestGlobalComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService , AuthService, PublisherService, ViewchildService, ApiService,
    {provide: LOGO_URL,  useValue: 'https://angular.io/resources/images/logos/standard/logo-nav.png'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
