import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ENcomponents/header/header.component';
import { MainPageComponent } from './ENcomponents/main-page/main-page.component';
import { FooterComponent } from './ENcomponents/footer/footer.component';
import { WorksPageComponent } from './ENcomponents/works-page/works-page.component';
import { AboutPageComponent } from './ENcomponents/about-page/about-page.component';
import { ContactPageComponent } from './ENcomponents/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    WorksPageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
