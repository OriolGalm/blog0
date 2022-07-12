import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsaComponent } from './capsa.component';

describe('CapsaComponent', () => {
  let component: CapsaComponent;
  let fixture: ComponentFixture<CapsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
