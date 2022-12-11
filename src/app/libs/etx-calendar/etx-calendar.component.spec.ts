import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtxCalendarComponent } from './etx-calendar.component';

describe('EtxCalendarComponent', () => {
  let component: EtxCalendarComponent;
  let fixture: ComponentFixture<EtxCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtxCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtxCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
