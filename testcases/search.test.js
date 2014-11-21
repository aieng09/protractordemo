//search test case
describe('e2e: search test case', function() {
    var base = require('./../common/base');

    beforeEach(function(){

    });

    it('Verify user is able to search for cssContainText',function(){
        base.pageHeader.clickOnReference();
        base.pageHeader.clickOnProtractorApi();
        base.protractorApiPage.enterSearchKeyWord('clone');
        expect(base.protractorApiPage.cssContainingTextLink.isPresent()).toBeFalsy();
        console.log('verify the cssContainingTextLink is not Present');

        base.protractorApiPage.clearSearchContent();
        base.protractorApiPage.enterSearchKeyWord('cssContainingText');
        expect(base.protractorApiPage.cssContainingTextLink.isPresent()).toBeTruthy();
        console.log('verify the cssContainingTextLink is present');

        base.protractorApiPage.cssContainingTextLink.click();
        expect(base.ptor.getCurrentUrl()).toMatch('cssContainingText');
        console.log('verify the cssContainingTextLink is displaying');
        expect(base.protractorApiPage.title.getText()).toMatch('by.cssContainingText');
        console.log('verify the title is displaying as by.cssContainingText');
    })

})