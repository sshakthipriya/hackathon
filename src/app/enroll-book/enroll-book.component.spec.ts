import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollBookComponent } from './enroll-book.component';

describe('EnrollBookComponent', () => {
  let component: EnrollBookComponent;
  let fixture: ComponentFixture<EnrollBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollBookComponent]
    });
    fixture = TestBed.createComponent(EnrollBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
