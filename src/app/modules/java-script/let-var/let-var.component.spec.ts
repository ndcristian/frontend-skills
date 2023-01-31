import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetVarComponent } from './let-var.component';

describe('LetVarComponent', () => {
  let component: LetVarComponent;
  let fixture: ComponentFixture<LetVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
