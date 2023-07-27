const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square } = require('./lib/shapes');


function promptUser(){
    inquirer.prompt([
        {
            type : 'input',
            name : 'letters',
            message : 'What do you want the three letters for your logo to be ?'
        },
        {
            type : 'input',
            name : 'textColor',
            message : 'What do you want the text color to be? (color or hex)'
        },
        {
            type : 'list',
            name : 'shape',
            message : 'What do you want the shape of your logo to be ?',
            choices : ["Circle","Triangle","Square"]
        },
        {
            type : 'input',
            name : 'shapeColor',
            message : 'What do you want the shape color to be? (color or hex)'
        }
    ])
    .then((response)=>{
        console.log("Success! SVG logo was created");

        const created = genLogo(response);
        fs.writeFile('logo.svg', created, (error) =>{
            error ? console.log("error generating logo") : console.log("success");
        });
    })
};


function genLogo(data){
    if (data.shape === 'Triangle'){
        const triangle = new Triangle(data.letters, data.textColor, data.shapeColor);
        return triangle.render(); //should be a string
    }
    if (data.shape === 'Square'){
        const square = new Square(data.letters, data.textColor, data.shapeColor);
        return square.render();
    }
    if (data.shape === 'Circle'){
        const circle = new Circle(data.letters, data.textColor, data.shapeColor);
        return circle.render();
    }
}




init();

function init () {
    promptUser();
}


// DONE
// use inquirer to accept user input about:
    //1: 3 letters (for text of the SVG)
    //2: text color (color or hex)
    //3: shape - circle, triangle, square
    //4: shape color (color or hex)

// DONE
// use fs to write file with (logo.svg, createLogo)


// NOTES:
    // svg must be 300x200 pixels
    // create Triangle, Circle, and Square classes (tested with jest) (as children of Shape)