import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfooditemsComponent } from './viewfooditems.component';

describe('ViewfooditemsComponent', () => {
  let component: ViewfooditemsComponent;
  let fixture: ComponentFixture<ViewfooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfooditemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
