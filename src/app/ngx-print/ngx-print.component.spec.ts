import {NgxPrintModule} from 'ngx-print';
import {FormsModule} from '@angular/forms';
import {NgxPrintComponent} from './ngx-print.component';
import {BrowserModule} from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatRadioModule, MatTableModule, MatTooltipModule} from '@angular/material';

describe('NgxPrintComponent', () => {
  let component: NgxPrintComponent;
  let fixture: ComponentFixture<NgxPrintComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        MatTableModule,
        MatRadioModule,
        NgxPrintModule,
        MatButtonModule,
        MatTooltipModule,
        BrowserAnimationsModule,
      ],
      declarations: [NgxPrintComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
