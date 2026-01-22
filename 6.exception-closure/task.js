// ============================================
// ЗАДАЧА 1: ФОРМАТТЕР ЧИСЕЛ
// ============================================
/**
 * Функция parseCount парсит строку в число
 * @param {string} value - значение для парсинга
 * @returns {number} распарсенное число
 * @throws {Error} если значение не является числом
 */
function parseCount(value) {
	const parsed = Number.parseFloat(value);
	if(isNaN(parsed)) {
		throw new Error("Невалидное значение");
	}
	return parsed;
}
/**
 * Функция validateCount обёртывает parseCount и перехватывает исключения
 * @param {string} value - значение для проверки
 * @returns {number|Error} число или объект ошибки
 */
function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}
// ============================================
// ЗАДАЧА 2: ТРЕУГОЛЬНИК
// ============================================
/**
 * Класс Triangle для работы с треугольниками
 */
class Triangle {
	/**
	 * Конструктор треугольника
	 * @param {number} a - первая сторона
	 * @param {number} b - вторая сторона
	 * @param {number} c - третья сторона
	 * @throws {Error} если треугольник не существует
	 */
	constructor(a, b, c) {
		// Проверка правила существования треугольника
		// Сумма двух сторон должна быть больше третьей
		if(a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	/**
	 * Геттер для получения периметра треугольника
	 * @returns {number} периметр треугольника
	 */
	get perimeter() {
		return this.a + this.b + this.c;
	}
	/**
	 * Геттер для получения площади треугольника по формуле Герона
	 * @returns {number} площадь треугольника (округлена до 3 знаков)
	 */
	get area() {
		// Формула Герона: S = sqrt(p * (p - a) * (p - b) * (p - c))
		// где p - полупериметр
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		// Округляем до 3 знаков после запятой
		return Number(area.toFixed(3));
	}
}
/**
 * Функция getTriangle создаёт объект треугольника или объект с сообщением об ошибке
 * @param {number} a - первая сторона
 * @param {number} b - вторая сторона
 * @param {number} c - третья сторона
 * @returns {Triangle|Object} объект Triangle или объект с геттерами ошибки
 */
function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		// Возвращаем объект с геттерами, которые всегда возвращают сообщение об ошибке
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}