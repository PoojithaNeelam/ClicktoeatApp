import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicktoeatComponent } from './clicktoeat.component';

describe('ClicktoeatComponent', () => {
  let component: ClicktoeatComponent;
  let fixture: ComponentFixture<ClicktoeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicktoeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicktoeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
