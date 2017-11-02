import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  books: Observable<any[]>;
  favouriteBooks: Observable<any>
  constructor(private db: AngularFireDatabase) { }
  getBooks(){
    this.books = this.db.list('books').valueChanges();
    return this.books;
  }
  getUnreadBooks(){
    
  }

}
