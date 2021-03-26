import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the Auth0 SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: 'dev-2iwfgxgj.au.auth0.com',
      clientId: 'SLMNw8zTqWuEAQkjtEHCyJETjHW9JCpc'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
