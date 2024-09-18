import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';
import { ListViewComponent } from './components/list-view/list-view.component';

import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    GoogleMapsModule,
    MapMarker,

    CardModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
