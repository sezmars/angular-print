import {NgModule} from '@angular/core';
import {NgxPrintModule} from 'ngx-print';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {Html2canvasPrintJsComponent} from './html2canvas-print-js';
import {NgxPrintComponent} from './ngx-print/ngx-print.component';
import {MatButtonModule, MatRadioModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NgxPrintComponent,
    Html2canvasPrintJsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxPrintModule,
    MatTableModule,
    MatRadioModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
