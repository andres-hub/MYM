import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { from } from 'rxjs';
import { SearchComponent } from './pages/search/search.component';
import { BannerComponent } from './pages/banner/banner.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { ChooseComponent } from './pages/choose/choose.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BriefcaseComponent } from './pages/briefcase/briefcase.component';
import { BtnFlotanteComponent } from './pages/btn-flotante/btn-flotante.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    BannerComponent,
    FeatureComponent,
    ChooseComponent,
    PracticeAreasComponent,
    OurTeamComponent,
    ContactComponent,
    BriefcaseComponent,
    BtnFlotanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
