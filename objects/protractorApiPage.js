//protractor API page Object

var protractorApiPage = function() {};

protractorApiPage.prototype = Object.create({},{
    searchInput:{
        get:function(){
            return element(by.id('searchInput'));
        }
    },
    clearSearchContent:{
        value:function(){
            console.log("Clear search content")
            return this.searchInput.clear();
        }
    },
    enterSearchKeyWord:{
    value:function (text) {
            console.log("Enter search key word: " + text);
            return this.searchInput.sendKeys(text);
        }
    },
    cssContainingTextLink:{
        get:function(){
            return element(by.cssContainingText('a','cssContainingText'));
        }
    },
    clickOnCssContainingTextLink:{
        value:function(){
            console.log("Click on cssContainingText Link result");
            return this.cssContainingTextLink.click();
        }
    },
    title:{
        get:function(){
            return $('.api-title');
        }
    }

});

module.exports = new protractorApiPage();