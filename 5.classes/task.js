// ЗАДАЧА 1: ПЕЧАТНОЕ ИЗДАНИЕ
// ============================================
// Базовый класс печатного издания
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}
	// Геттер для state
	get state() {
		return this._state;
	}
	// Сеттер для state
	set state(newState) {
		if(newState < 0) {
			this._state = 0;
		} else if(newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	// Метод для восстановления издания
	fix() {
		this._state = this._state * 1.5;
		if(this._state > 100) {
			this._state = 100;
		}
	}
}
// Класс журнала
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
// Базовый класс для книг
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
// Класс для романов
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}
// Класс для фантастических произведений
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
// Класс для детективов
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}
// ============================================
// ЗАДАЧА 2: БИБЛИОТЕКА
// ============================================
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	// Добавить книгу в библиотеку
	addBook(book) {
		if(book.state > 30) {
			this.books.push(book);
		}
	}
	// Найти книгу по ключу
	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}
	// Выдать книгу по названию
	giveBookByName(bookName) {
		const bookIndex = this.books.findIndex(book => book.name === bookName);
		if(bookIndex !== -1) {
			const book = this.books[bookIndex];
			this.books.splice(bookIndex, 1);
			return book;
		}
		return null;
	}
}
// ============================================
// ЗАДАЧА 3: ЖУРНАЛ УСПЕВАЕМОСТИ (*)
// ============================================
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}
	// Добавить оценку по предмету
	addMark(mark, subject) {
		// Валидация оценки
		if(mark < 2 || mark > 5) {
			return;
		}
		// Проверка наличия предмета
		if(!this.marks[subject]) {
			this.marks[subject] = [];
		}
		// Добавление оценки
		this.marks[subject].push(mark);
	}
	// Получить среднюю оценку по предмету
	getAverageBySubject(subject) {
		// Проверка наличия предмета
		if(!this.marks[subject]) {
			return 0;
		}
		// Подсчет средней оценки
		const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks[subject].length;
	}
	// Получить общую среднюю оценку
	getAverage() {
		const subjects = Object.keys(this.marks);
		// Если нет предметов, возвращаем 0
		if(subjects.length === 0) {
			return 0;
		}
		// Подсчет суммы средних оценок
		const sumOfAverages = subjects.reduce((acc, subject) => {
			return acc + this.getAverageBySubject(subject);
		}, 0);
		return sumOfAverages / subjects.length;
	}
}