import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceImplComponent } from './interface-impl.component';

describe('InterfaceImplComponent', () => {
  let component: InterfaceImplComponent;
  let fixture: ComponentFixture<InterfaceImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceImplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
