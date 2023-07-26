class Shape{
    constructor(letters, textColor, shapeColor){
        if (letters.length < 3 || letters === "") {
            throw new Error("Incorrect value for the 3 letters you input");
        }
        else{
            this.letters = letters;
        }
        this.textColor = textColor;      
        this.shapeColor = shapeColor;
        this.shapeColor = shapeColor;
        
    
    }
    render (){
        throw new Error("Should never see this if your child classes use polymorphism to actually override this method");
    }

}

class Circle extends Shape {
    constructor(letters, textColor, shapeColor) {
      super(letters, textColor, shapeColor);
    }
  
    render() {
      return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
     
       <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
     </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(letters, textColor, shapeColor) {
      super(letters, textColor, shapeColor);
    }
  
    render() {
      return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
     
       <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
     </svg>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(letters, textColor, shapeColor) {
      super(letters, textColor, shapeColor);
    }
  
    render() {
      return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
     
       <polygon points="100,20 40,198 190,78 10,78 160,198" fill="${this.shapeColor}" />
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
     </svg>`;
    }
  }
  

var Shapes = {
    Circle,
    Triangle,
    Square
}

module.exports = Shapes;