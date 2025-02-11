import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableParentComponent } from './injectable-parent.component';

describe('InjectableParentComponent', () => {
  let component: InjectableParentComponent;
  let fixture: ComponentFixture<InjectableParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
