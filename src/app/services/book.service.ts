import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BookDto } from '../models/books/book.dto';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.dto';
import { BookInventoryHistoryDto } from '../models/books/book-inventory-history.dto';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  apiReadUrl: string = `${environment.baseUrl}/readbook`;
  apiWriteUrl: string = `${environment.baseUrl}/writebook`;

  constructor(private http: HttpClient) {}

  // CREATE
  createBook(book: BookDto): Observable<ApiResponse<number>> {
    return this.http.post<ApiResponse<number>>(`${this.apiWriteUrl}/create`, book);
  }

  // READ
  getBooks(bookName = ''): Observable<ApiResponse<BookDto[]>> {
    return this.http.get<ApiResponse<BookDto[]>>(
      `${this.apiReadUrl}/get-all?name=${bookName}`
    );
  }

  getBookById(id: string): Observable<ApiResponse<BookDto>> {
    return this.http.get<ApiResponse<BookDto>>(`${this.apiReadUrl}/get-by-id/${id}`);
  }

  // UPDATE
  updateBook(id: string, book: BookDto): Observable<ApiResponse<string>> {
    return this.http.put<ApiResponse<string>>(`${this.apiWriteUrl}/update/${id}`, book);
  }

  // DELETE
  deleteBook(id: string): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${this.apiWriteUrl}/delete/${id}`);
  }

  updateQuantity(
    id: string,
    quantity: number,
    direction: number,
    note: string
  ): Observable<ApiResponse<string>> {
    return this.http.put<ApiResponse<string>>(
      `${this.apiWriteUrl}/update-inventory`,
      {id, quantity, direction, note }
    );
  }
}
