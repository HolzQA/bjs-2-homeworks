"use strict"

class PrintEditionItem {                                //печатные издания
    constructor(name, releaseDate, pagesCount){
        this.name = name;                                           //название издания
        this.releaseDate = releaseDate;                             //год издания
        this.pagesCount = pagesCount;                               //количество страниц
        this.state = 100;                                           //состояние издания
        this.type = null;                                           //тип
    }

    fix(){
        this.state *= 1.5;
    }

    set state(newState){
        if (newState < 0) {
          this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
          } else {
            this._state = newState;
          }
      }

    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem {                   //книжный магазин 
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {                                   //книга
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;                                 //автор книги
        this.type = "book";
    }
}

class NovelBook extends Book {                                  //романы
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {                              //фантастика
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {                              //детективы
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {                                                 //Библиотека
    constructor(name){
        this.name = name;
        this.books = [];                                    //книги в библиотеке
    }

//добавление книги в библиотеку
    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    }

//поиск по характеристике (type) книги и ее значению
    findBookBy(type, value){                                                                
        return this.books.find(book => book[type] === value) || null;
    }

//выдача книги читателю
    giveBookByName(bookName){                                                               
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
        }
        return null; 
    } 
}

//Дополнительное задание

class Student {
    constructor(name){
        this.name = name;
        this.marks = new Object();
    }

//добавление оценки
    addMark(mark, subject){
        if (mark < 2 || mark > 5) {
            return;
        }
        if (subject in this.marks) {
            this.marks[subject].push(mark);
        } else {
            this.marks[subject] = [mark];
        }
    }

//средняя оценка по заданному предмету
    getAverageBySubject(subject){  
        if (subject in this.marks) {
            const marksArr = this.marks[subject];
            return marksArr.reduce((acc, mark) => acc + mark / marksArr.length, 0);
        } else {
            return 0;
        }
    }

//средняя оценка по всем предметам
    getAverage(){    
        let averages = [];
        for (let key of Object.keys(this.marks)) {
            averages.push(this.getAverageBySubject(key));
        }      
        return averages.reduce((acc,cur) => acc + cur / averages.length, 0);
    }
}



// // Дополнительное задание по-моему

// class Subject {
//     constructor(name){
//         this.marks = []; 
//         this.name = name;
//     }
// }

// class Student {
//     constructor(name){
//         this.name = name;
//         this.subjects = [];
//     }

// //добавление оценки
//     addMark(mark, subject){    
//         if (mark < 2 || mark > 5) {
//             return;
//         }                         
//         const existSubjectIndex = this.subjects.findIndex(cur => cur.name === subject);
//         if (existSubjectIndex === -1) {
//             const newSubject = new Subject(subject);
//             newSubject.marks.push(mark);
//             this.subjects.push(newSubject);
//         } else {
//             this.subjects[existSubjectIndex].marks.push(mark);
//         }
//     }

// //средняя оценка по заданному предмету
//     getAverageBySubject(subject){                            
//         const existSubject = this.subjects.find(cur => cur.name === subject);
//         if (!existSubject) {
//             return 0;
//         }
//         return existSubject.marks.reduce((acc, mark) => acc + mark / existSubject.marks.length, 0);
//     }

// //средняя оценка по всем предметам
//     getAverage(){                                   
//         return this.subjects.reduce((acc,cur) => acc + this.getAverageBySubject(cur.name) / this.subjects.length, 0);
//     }
// }