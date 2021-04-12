import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegcategoryComponent } from './vegcategory.component';

describe('VegcategoryComponent', () => {
  let component: VegcategoryComponent;
  let fixture: ComponentFixture<VegcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
