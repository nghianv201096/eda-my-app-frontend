import { NgModule } from '@angular/core';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { HomeComponent } from './features/home/home.component';
import { BookListComponent } from './features/books/book-list/book-list.component';
import { LoginComponent } from './features/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { CreateBookComponent } from './features/books/create-book/create-book.component';
import { UpdateBookComponent } from './features/books/update-book/update-book.component';
import { ViewBookComponent } from './features/books/view-book/view-book.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // Books.
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'books/create',
    component: CreateBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'books/update/:id',
    component: UpdateBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'books/view/:id',
    component: ViewBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
