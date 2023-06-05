import { Book } from "./book";

export  class Author{
    constructor(public id: number, public name: string, public date: Date, public books: Book[]){
        
    }
}