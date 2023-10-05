import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFormInputComponent } from './single-form-input.component';

describe('SingleFormInputComponent', () => {
  let component: SingleFormInputComponent;
  let fixture: ComponentFixture<SingleFormInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleFormInputComponent]
    });
    fixture = TestBed.createComponent(SingleFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
