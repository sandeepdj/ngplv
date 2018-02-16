import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HeaderFixedComponent } from './pages/header-fixed/header-fixed.component';
import { MenusComponent } from './pages/menus/menus.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TheTeamComponent } from './pages/the-team/the-team.component';
import { MentorsComponent } from './pages/mentors/mentors.component';
import { CareersComponent } from './pages/careers/careers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderFixedComponent,
    MenusComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    TheTeamComponent,
    MentorsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
