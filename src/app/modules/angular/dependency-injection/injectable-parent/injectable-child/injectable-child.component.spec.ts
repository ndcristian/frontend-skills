import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableChildComponent } from './injectable-child.component';

describe('InjectableChildComponent', () => {
  let component: InjectableChildComponent;
  let fixture: ComponentFixture<InjectableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
