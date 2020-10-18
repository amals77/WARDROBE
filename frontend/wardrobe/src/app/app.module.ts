import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main/main.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import {UploadService} from './upload.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MainComponent,
    ProductUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
