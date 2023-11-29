import { Controller,Get,Post,Put,Delete,Body,Param } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}


    @Post('/add')
    addNewBook(@Body() book:CreateBookDto):string{
        return this.bookService.addBookService(book);
    }

    @Get('/findAll')
    findAllBooks():CreateBookDto[]{
        return this.bookService.findAllBooksService();

    }

    @Put('/update')
    updateBook(@Body() book:CreateBookDto):string{
        return this.bookService.updateBookService(book);
    }

    @Delete('/delete/:Id')
    deleteBook(@Param('Id') bookId:string):string{
        return this.bookService.deleteBookService(bookId)
    }


    
}
