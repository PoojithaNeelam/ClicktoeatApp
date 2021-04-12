import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultbgimgComponent } from './defaultbgimg.component';

describe('DefaultbgimgComponent', () => {
  let component: DefaultbgimgComponent;
  let fixture: ComponentFixture<DefaultbgimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultbgimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultbgimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
