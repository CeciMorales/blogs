import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogsPreviewComponent } from './list-blogs-preview.component';

describe('ListBlogsPreviewComponent', () => {
  let component: ListBlogsPreviewComponent;
  let fixture: ComponentFixture<ListBlogsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlogsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
