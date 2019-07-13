import {NgModule} from '@angular/core';
import {NgxPrintModule} from 'ngx-print';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPrintComponent} from './ngx-print/ngx-print.component';
import {Html2canvasPrintJsComponent} from './html2canvas-print-js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatRadioModule, MatTableModule, MatTabsModule, MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NgxPrintComponent,
    Html2canvasPrintJsComponent,
  ],
  imports: [
    FormsModule,
    MatTabsModule,
    BrowserModule,
    NgxPrintModule,
    MatTableModule,
    MatRadioModule,
    MatButtonModule,
    MatTooltipModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
