import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Html2canvasPrintJsComponent} from './html2canvas-print-js';
import {NgxPrintComponent} from './ngx-print/ngx-print.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ngxPrint',
  },
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'html2canvasPrintJs',
    component: Html2canvasPrintJsComponent,
  },
  {
    path: 'ngxPrint',
    component: NgxPrintComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
