import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTypeComponent } from './generic-type.component';

describe('GenericTypeComponent', () => {
  let component: GenericTypeComponent;
  let fixture: ComponentFixture<GenericTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
