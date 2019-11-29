import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';


const appRoutes: Routes = [ // creates routes for the pages
  { path: 'contact/contact', component: ContactComponent },
  { path: 'about/about', component: AboutComponent },
  { path: 'portfolio/portfolio', component: PortfolioComponent },
  { path: 'app', component: AppComponent},
  { path: 'photo-gallery/photo-gallery', component: PhotoGalleryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
