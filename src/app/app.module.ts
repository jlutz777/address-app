import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatFormField, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FindComponent } from './find/find.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressCardComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
