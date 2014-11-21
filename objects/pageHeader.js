//protractor page header object

var pageHeader = function(){};

pageHeader.prototype = Object.create({},{
    home:{get:
        function(){
            return element(by.cssContainingText('a','Home'));
        }
    },
    reference:{get:
        function(){
            return element(by.id('drop4'));
        }
    },
    protractorAPI:{get:
        function(){
            return element(by.cssContainingText('a','Protractor API'));
        }
    },
    clickOnReference: {
        value: function(){
            console.log("Click on Reference link");
            this.reference.click();
        }
    },
    clickOnProtractorApi:{
        value: function(){
            console.log("Click on Protractor Api link");
            this.protractorAPI.click();
        }
    }
})

module.exports = new pageHeader();