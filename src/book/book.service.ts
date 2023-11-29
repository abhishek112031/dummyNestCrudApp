import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/book.dto';




@Injectable()
export class BookService {
    public books: CreateBookDto[] = [];

    //add
    addBookService(book: CreateBookDto): string {
        this.books.push(book);
        return 'book is added successfully';
    }

    //update

    updateBookService(book:CreateBookDto):string{
        let idx=this.books.findIndex((curBook)=>{
            return curBook.id===book.id;
        });

        this.books[idx]=book;
        return 'book is updated successfully!'

    }
    //delete
    deleteBookService(bookId:string):string{
        let afterDel=this.books.filter(elem=>{
            return elem.id!==bookId;
        });
        this.books=afterDel;
        return 'book is deleted successfully!!'
    }

    //find All

    findAllBooksService():CreateBookDto[]{
        return this.books;
    }

}
