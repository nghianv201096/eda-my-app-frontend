import { Component } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  OverlayService,
} from 'primeng/api';
import { BookTypeEnum } from 'src/app/enums/book-type.enum';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books: BookDto[] = [];
  bookTypes = BookTypeEnum.All;
  selectedBook: BookDto | null = null;
  showHistory: boolean = false;
  searchData = {
    bookName: '',
  };

  constructor(
    private bookService: BookService,
    private overlayService: OverlayService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  reload() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks(this.searchData.bookName).subscribe((data) => {
      if (data.isSuccessful) {
        this.books = data.data ?? [];
      } else {
      }
    });
  }

  delete(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure want to delete this book?',
      accept: () => {
        // this.overlayService.showOverlay();
        this.bookService.deleteBook(id).subscribe((rs) => {
          // this.overlayService.hideOverlay();
          if (rs.isSuccessful) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Delete book successfully!',
            });

            this.loadBooks();
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: rs.message,
            });
          }
        });
      },
    });
  }

  changeQuantity(product: BookDto, isAdded: boolean) {
    this.bookService
      .updateQuantity(
        product.id,
        10,
        isAdded ? 1 : -1,
        isAdded ? 'Increase by 10' : 'Decrease by 10'
      )
      .subscribe((data) => {
        if (data.isSuccessful) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Update qantity book successfully!',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: data.message,
          });
        }
        this.reload();
      });

  }

  viewHistory(book: BookDto) {
    this.selectedBook = book;
    this.showHistory = true;
  }
}
