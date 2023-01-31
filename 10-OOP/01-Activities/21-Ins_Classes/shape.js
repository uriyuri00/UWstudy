class Shape {
  // Just like constructor functions, classes can accept arguments
  // 생성자 함수와 마찬가지로 클래스는 인수를 허용할 수 있습니다.
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

const shape = new Shape(25, 25);

shape.printInfo();
