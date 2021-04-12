import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemlistComponent } from './fooditemlist.component';

describe('FooditemlistComponent', () => {
  let component: FooditemlistComponent;
  let fixture: ComponentFixture<FooditemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooditemlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
