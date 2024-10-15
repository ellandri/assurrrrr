import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Page Route
import { AppRoutingModule } from './app-routing.module';

// toaster
import { ToastrModule } from 'ngx-toastr';


// Auth
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


// Component
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
