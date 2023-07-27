const {Shape} = require('../lib/shapes');



describe('Shape',()=>{
    describe('input the 3 letters',() => {
        it('Should throw an error if the user enters more than 3 characters',()=>{
            let cb = () => {
                let newObj = new Shape('aaaa', 'blue', 'blue');
                return newObj;
                
            }
            expect(cb).toThrowError("Incorrect value for the 3 letters you input");
        });
        it('Should throw an error if the user enters no letters',()=>{
            let cb = () => {
                let newObj = new Shape('', 'blue', 'blue');
                return newObj;
            } 
            expect(cb).toThrowError("Incorrect value for the 3 letters you input");
        });
    });

});