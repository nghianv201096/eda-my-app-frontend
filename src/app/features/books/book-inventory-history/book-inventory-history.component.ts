import { Component, Input, SimpleChanges } from '@angular/core';
import { BookInventoryHistoryDto } from 'src/app/models/books/book-inventory-history.dto';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-inventory-history',
  templateUrl: './book-inventory-history.component.html',
  styleUrls: ['./book-inventory-history.component.css'],
})
export class BookInventoryHistoryComponent {
  @Input()
  book!: BookDto | null;

  histories: BookInventoryHistoryDto[] = [];
  constructor(private bookService: BookService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Check if the 'inputData' property changed
    if (!!changes['book'] && !!this.book?.inventoryHistories) {
      this.histories = this.book.inventoryHistories;
    }
  }

  loadHistory() {
    this.histories = [];
    if (!this.book) {
      return;
    }

    this.bookService
      .getBookById(this.book.id)
      .subscribe((data) => {
        if (data.isSuccessful) {
          this.histories = data.data?.inventoryHistories ?? [];
        } else {
          this.histories = [];
        }
      });
  }
}
