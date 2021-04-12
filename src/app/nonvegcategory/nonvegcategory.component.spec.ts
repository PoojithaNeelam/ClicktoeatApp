import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegcategoryComponent } from './nonvegcategory.component';

describe('NonvegcategoryComponent', () => {
  let component: NonvegcategoryComponent;
  let fixture: ComponentFixture<NonvegcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
