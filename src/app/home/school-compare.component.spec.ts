import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCompareComponent } from './school-compare.component';

describe('SchoolCompareComponent', () => {
  let component: SchoolCompareComponent;
  let fixture: ComponentFixture<SchoolCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
