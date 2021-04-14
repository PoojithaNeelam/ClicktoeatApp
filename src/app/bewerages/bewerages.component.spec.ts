import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeweragesComponent } from './bewerages.component';

describe('BeweragesComponent', () => {
  let component: BeweragesComponent;
  let fixture: ComponentFixture<BeweragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeweragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeweragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
