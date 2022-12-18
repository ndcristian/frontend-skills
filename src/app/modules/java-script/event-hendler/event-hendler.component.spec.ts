import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHendlerComponent } from './event-hendler.component';

describe('EventHendlerComponent', () => {
  let component: EventHendlerComponent;
  let fixture: ComponentFixture<EventHendlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHendlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHendlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
