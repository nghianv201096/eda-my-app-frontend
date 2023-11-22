import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInventoryHistoryComponent } from './book-inventory-history.component';

describe('BookInventoryHistoryComponent', () => {
  let component: BookInventoryHistoryComponent;
  let fixture: ComponentFixture<BookInventoryHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookInventoryHistoryComponent]
    });
    fixture = TestBed.createComponent(BookInventoryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
