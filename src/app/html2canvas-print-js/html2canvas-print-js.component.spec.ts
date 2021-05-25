import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {Html2canvasPrintJsComponent} from './html2canvas-print-js.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatRadioModule, MatTableModule, MatTooltipModule} from '@angular/material';

describe('Html2canvasPrintJsComponent', () => {
  let component: Html2canvasPrintJsComponent;
  let fixture: ComponentFixture<Html2canvasPrintJsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        MatTableModule,
        MatRadioModule,
        MatButtonModule,
        MatTooltipModule,
        BrowserAnimationsModule,
      ],
      declarations: [Html2canvasPrintJsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html2canvasPrintJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
