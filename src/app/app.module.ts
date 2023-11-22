import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { BookListComponent } from './features/books/book-list/book-list.component';
import { CreateBookComponent } from './features/books/create-book/create-book.component';
import { UpdateBookComponent } from './features/books/update-book/update-book.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { EnumDescriptionPipe } from './pipes/enum-description.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewBookComponent } from './features/books/view-book/view-book.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from './features/navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';
import { AuthInterceptor } from './interceptor/authen.interceptor';
import { AccessDeniedComponent } from './features/access-denied/access-denied.component';
import { BookInventoryHistoryComponent } from './features/books/book-inventory-history/book-inventory-history.component';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ReversePipe,
    UppercasePipe,
    EnumDescriptionPipe,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    ViewBookComponent,
    NavbarComponent,
    LoginComponent,
    AccessDeniedComponent,
    BookInventoryHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
    DropdownModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
