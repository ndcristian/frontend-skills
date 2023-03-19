import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuresOperatorsComponent } from './structures-operators.component';

describe('StructuresOperatorsComponent', () => {
  let component: StructuresOperatorsComponent;
  let fixture: ComponentFixture<StructuresOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuresOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuresOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
