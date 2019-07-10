import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html2canvasPrintJsComponent } from './html2canvas-print-js.component';

describe('Html2canvasPrintJsComponent', () => {
  let component: Html2canvasPrintJsComponent;
  let fixture: ComponentFixture<Html2canvasPrintJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html2canvasPrintJsComponent ]
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
