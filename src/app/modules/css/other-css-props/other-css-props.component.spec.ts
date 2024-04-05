import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCssPropsComponent } from './other-css-props.component';

describe('OtherCssPropsComponent', () => {
  let component: OtherCssPropsComponent;
  let fixture: ComponentFixture<OtherCssPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCssPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCssPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
