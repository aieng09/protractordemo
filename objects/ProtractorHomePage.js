//Protractor Home Page Object

var protractorHomePage = function(){};

protractorHomePage.prototype = Object.create({},{
    viewOnGitHubLink: {
        get:function(){
            return element(by.cssContainingText('a','View on GitHu'))
        }
    },
    protractorDescription:{
        get:function(){
            return $('.lead');
        }
    },
    navigateToHomePage:{
        value:function(){
            console.log('Navigate to HomePage: '+ browser.baseUrl);
            return browser.get('#/');
        }
    }
})

module.exports = new protractorHomePage();