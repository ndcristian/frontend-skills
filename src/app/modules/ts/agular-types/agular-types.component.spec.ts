import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgularTypesComponent } from './agular-types.component';

describe('AgularTypesComponent', () => {
  let component: AgularTypesComponent;
  let fixture: ComponentFixture<AgularTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgularTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgularTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
