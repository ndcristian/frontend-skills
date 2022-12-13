import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPseudoClassComponent } from './host-pseudo-class.component';

describe('HostPseudoClassComponent', () => {
  let component: HostPseudoClassComponent;
  let fixture: ComponentFixture<HostPseudoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostPseudoClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostPseudoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
