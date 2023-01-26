import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropFileUploaderComponent } from './drag-drop-file-uploader.component';

describe('DragDropFileUploaderComponent', () => {
  let component: DragDropFileUploaderComponent;
  let fixture: ComponentFixture<DragDropFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropFileUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
