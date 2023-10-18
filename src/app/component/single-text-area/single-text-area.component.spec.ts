import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTextAreaComponent } from './single-text-area.component';

describe('SingleTextAreaComponent', () => {
  let component: SingleTextAreaComponent;
  let fixture: ComponentFixture<SingleTextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTextAreaComponent]
    });
    fixture = TestBed.createComponent(SingleTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
