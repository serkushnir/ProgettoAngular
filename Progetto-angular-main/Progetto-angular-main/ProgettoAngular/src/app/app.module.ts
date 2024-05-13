import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GlobalOverviewComponent } from './global-overview/global-overview.component';
import { ErrorComponent } from './error/error.component';
import { TabellaRegioniComponent } from './tabella-regioni/tabella-regioni.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StatisticheComponent,
    AboutComponent,
    HomeComponent,
    GlobalOverviewComponent,
    ErrorComponent,
    TabellaRegioniComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
