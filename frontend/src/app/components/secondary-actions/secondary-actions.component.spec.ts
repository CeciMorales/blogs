import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryActionsComponent } from './secondary-actions.component';

describe('SecondaryActionsComponent', () => {
  let component: SecondaryActionsComponent;
  let fixture: ComponentFixture<SecondaryActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
