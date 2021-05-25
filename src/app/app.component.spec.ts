import {NgxPrintModule} from 'ngx-print';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { TestBed, waitForAsync } from '@angular/core/testing';
import {AppRoutingModule} from './app.routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPrintComponent} from './ngx-print/ngx-print.component';
import {Html2canvasPrintJsComponent} from './html2canvas-print-js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatRadioModule, MatTableModule, MatTabsModule, MatTooltipModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
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
      declarations: [
        AppComponent,
        NgxPrintComponent,
        Html2canvasPrintJsComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Print Examples'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Print Examples');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular Print Examples!');
  });
});
