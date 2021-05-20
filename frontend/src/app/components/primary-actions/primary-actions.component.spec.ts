import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryActionsComponent } from './primary-actions.component';

describe('PrimaryActionsComponent', () => {
  let component: PrimaryActionsComponent;
  let fixture: ComponentFixture<PrimaryActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
