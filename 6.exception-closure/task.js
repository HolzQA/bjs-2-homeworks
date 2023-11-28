"use strict"

function parseCount(value) {
    const parseValue = Number.parseFloat(value);
    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    }
    return parseValue;
}


function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(side1, side2, side3) {
        if (side1 >= side2 + side3 || 
            side2 >= side1 + side3 || 
            side3 >= side2 + side1) {
                throw new Error("Треугольник с такими сторонами не существует");
            }
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;

    }

    get perimeter() {
            return this.side1 + this.side2 + this.side3;
    }

    get area() {
        const semiPerimeter = (this.side1 + this.side2 + this.side3)/2;
        const areaGeron = Math.sqrt(semiPerimeter*(semiPerimeter - this.side1)*(semiPerimeter - this.side2)*(semiPerimeter - this.side3));
        return +areaGeron.toFixed(3);
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch(error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        } 
    }
}