import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BASE_PATH, Configuration } from "../ApiModule";
import { AdminModule } from "./admin/admin.module";
import { PublicModule } from "./public/public.module";
import '@angular/common/locales/global/ru';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { IMaskModule } from "angular-imask";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    PublicModule,
    AdminModule,
    BrowserAnimationsModule,
    NgbModalModule,
    IMaskModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: 'http://192.168.0.150:8000' },
    {
      provide: Configuration,
      useFactory: () => new Configuration(
        {
          credentials: { OAuth2PasswordBearer : <string>localStorage.getItem("accessToken")},
        }
      ),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
