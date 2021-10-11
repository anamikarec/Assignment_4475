class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.height*this.width;
    }
}

class Square extends Rectangle{
    constructor(height,width){
        super(height,width);
    }
}


const rectangle = new Rectangle(20,40);
console.log(rectangle.getArea());

const square = new Square(20,20);
console.log(square.getArea());