import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfooditemComponent } from './readfooditem.component';

describe('ReadfooditemComponent', () => {
  let component: ReadfooditemComponent;
  let fixture: ComponentFixture<ReadfooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadfooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
