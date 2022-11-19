import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTypesComponent } from './specific-types.component';

describe('SpecificTypesComponent', () => {
  let component: SpecificTypesComponent;
  let fixture: ComponentFixture<SpecificTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
