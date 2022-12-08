import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateFormComponent } from './ng-template-form.component';

describe('NgTemplateFormComponent', () => {
  let component: NgTemplateFormComponent;
  let fixture: ComponentFixture<NgTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
