import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDirectivesTestComponent } from './ng-directives-test.component';

describe('NgDirectivesTestComponent', () => {
  let component: NgDirectivesTestComponent;
  let fixture: ComponentFixture<NgDirectivesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDirectivesTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDirectivesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
