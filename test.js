import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page

//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        // Force an error...
        .expect(Selector('#article-header').innerText).eql('Thank you, Johnny Smith!')
});
