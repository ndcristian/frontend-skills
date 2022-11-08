import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDefaultComponent } from './pipe-default.component';

describe('PipeDefaultComponent', () => {
  let component: PipeDefaultComponent;
  let fixture: ComponentFixture<PipeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
