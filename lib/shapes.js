

class Shape{
    constructor(letters, textColor, shapeColor){
        if (letters.length < 3 && letters !== ""){
            this.letters = letters;
        }
        else{
            throw new Error("Incorrect value for the 3 letters you input");
        }

        if (textColor === 'red' || textColor === 'orange' || textColor === 'yellow'
        || textColor === 'green' || textColor === 'blue' || textColor === 'purple'){
            this.textColor = textColor;
        }
        else if(textColor.charAt(0) === '#' && textColor.length === 7){
            this.textColor = textColor;
        }
        else{
            throw new Error("incorrect value for the text color :(");
        }
        
        if (shapeColor === 'red' || shapeColor === 'orange' || shapeColor === 'yellow'
        || shapeColor === 'green' || shapeColor === 'blue' || shapeColor === 'purple'){
            this.shapeColor = shapeColor;
        }
        else if(shapeColor.charAt(0) === '#' && shapeColor.length === 7){
            this.shapeColor = shapeColor;
        }
        else{
            throw new Error("incorrect value for the shape color :(");
        }
    }
    render (){
        throw new Error("Should never see this if your child classes use polymorphism to actually override this method");
    }

}












var Shapes = {
    Cirlce,
    Triangle,
    Square
}

module.exports = Shapes;