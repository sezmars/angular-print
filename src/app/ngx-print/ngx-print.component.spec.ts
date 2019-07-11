import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxPrintComponent} from './ngx-print.component';

describe('NgxPrintComponent', () => {
  let component: NgxPrintComponent;
  let fixture: ComponentFixture<NgxPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPrintComponent]
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
