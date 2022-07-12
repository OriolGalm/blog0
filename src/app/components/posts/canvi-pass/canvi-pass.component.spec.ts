import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanviPassComponent } from './canvi-pass.component';

describe('CanviPassComponent', () => {
  let component: CanviPassComponent;
  let fixture: ComponentFixture<CanviPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanviPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanviPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
